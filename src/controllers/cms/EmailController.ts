import { Request, Response } from "express";
import nodemailer, { TransportOptions } from "nodemailer";
import { ISOA } from "../../interface/ISOA";
import { dataSOAAR, dataSOAARRaw } from "./PendingARController";
import { getEndOfMonthDate } from "../../helpers/timeHelper";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailDirect = async ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  if (!to || !subject || (!text && !html)) {
    throw new Error("Semua field harus diisi");
  }

  return await transporter.sendMail({
    from: `"Admin" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
    priority: "high",
    headers: {
      "X-Priority": "1", // 1 = Urgent, 3 = Normal, 5 = Low
      Priority: "high",
    },
  });
};

export const templateEmailSOA = async (type: "AR" | "Billing") => {
  const to = "daffaabiyyu38@gmail.com";

  const formatDateLabel = (date: Date): string => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const year = date.getUTCFullYear();
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate().toString().padStart(2, "0");

    return `As of ${month} ${day}, ${year}`;
  };

  const dateLabel = formatDateLabel(getEndOfMonthDate());

  const subject =
    type === "AR" ? "Account Receivable Report" : "Billing Receivable Report";
  const text = "Please find the attached report.";

  // Ambil data summary dan raw
  const dataSum = type === "AR" ? await dataSOAAR() : await dataSOAAR();
  const dataRaw = type === "AR" ? await dataSOAARRaw() : await dataSOAARRaw();

  const getCurrencyLabel = (data: ISOA[]): string => {
    const currencies = new Set(data.map((item) => item.curr).filter(Boolean));
    return currencies.size === 1 ? [...currencies][0] : "-";
  };

  const parseAmount = (amount: string | number | undefined | null): number => {
    if (typeof amount === "number") return amount;
    if (typeof amount === "string") {
      const cleaned = amount.replace(/\./g, "").replace(/,/g, "").trim();
      const parsed = Number(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const calculateTotalAmount = (item: ISOA) => {
    const agingFields = [
      item.current,
      item.range_1_30,
      item.range_31_60,
      item.range_61_90,
      item.range_91_120,
      item.range_121_150,
      item.range_over_150,
    ];
    const total = agingFields.reduce((acc, val) => acc + parseAmount(val), 0);
    return total;
  };

  const calculateTotalAging = (data: ISOA[]) => {
    const parse = (val: string) => parseAmount(val || "0");

    return {
      current: data.reduce((acc, d) => acc + parse(d.current), 0),
      range_1_30: data.reduce((acc, d) => acc + parse(d.range_1_30), 0),
      range_31_60: data.reduce((acc, d) => acc + parse(d.range_31_60), 0),
      range_61_90: data.reduce((acc, d) => acc + parse(d.range_61_90), 0),
      range_91_120: data.reduce((acc, d) => acc + parse(d.range_91_120), 0),
      range_121_150: data.reduce((acc, d) => acc + parse(d.range_121_150), 0),
      range_over_150: data.reduce((acc, d) => acc + parse(d.range_over_150), 0),
    };
  };

  const renderRows = (data: ISOA[]) =>
    data.length
      ? data
          .map((item) => {
            const formatValue = (value: string | number) =>
              value === "-" || Number(value) === 0
                ? "-"
                : Number(value).toLocaleString("id-ID");

            const agingFields = [
              "current",
              "range_1_30",
              "range_31_60",
              "range_61_90",
              "range_91_120",
              "range_121_150",
              "range_over_150",
            ] as const;

            const total = calculateTotalAmount(item);

            return `
          <tr>
            <td>${item.code}</td>
            <td>${item.customerName}</td>
            <td align="right">${formatValue(item.valuatedAmount)}</td>
            <td style="text-align: center;">${item.curr}</td>
            ${agingFields
              .map((key) => {
                const rawVal = parseAmount(item[key]);
                const displayVal = formatValue(item[key]);
                const style =
                  rawVal < 0
                    ? ' style="background-color: #FBC9C9; color: #C00000;"'
                    : "";
                return `<td align="right"${style}>${displayVal}</td>`;
              })
              .join("")}
            <td align="right">${formatValue(total)}</td>
          </tr>`;
          })
          .join("")
      : `
        <tr>
          <td>-</td><td>-</td><td align="right">-</td>
          <td style="text-align: center;">-</td>
          ${Array(7).fill("<td>-</td>").join("")}
          <td align="right">-</td>
        </tr>`;

  const generateTable = (
    affco: any[],
    parties: any[],
    label: string
  ): string => {
    const totalAffco = affco.reduce(
      (acc, c) => acc + parseAmount(c.valuatedAmount),
      0
    );
    const totalParties = parties.reduce(
      (acc, p) => acc + parseAmount(p.valuatedAmount),
      0
    );
    const grandTotal = totalAffco + totalParties;

    const totalAgingAffco = calculateTotalAging(affco);
    const totalAgingParties = calculateTotalAging(parties);
    const totalAgingGrand = calculateTotalAging([...affco, ...parties]);

    const affcoRows = renderRows(affco);
    const partyRows = renderRows(parties);

    const affcoCurr = getCurrencyLabel(affco);
    const partiesCurr = getCurrencyLabel(parties);
    const grandCurr = getCurrencyLabel([...affco, ...parties]);

    const formatTotal = (total: number) =>
      total === 0 ? "-" : total.toLocaleString("id-ID");

    const renderAgingTotals = (aging: ReturnType<typeof calculateTotalAging>) =>
      (Object.values(aging) as number[])
        .map((val) => {
          const style =
            val < 0
              ? ' style="background-color: #FBC9C9; color: #C00000;"'
              : "";
          return `<td align="right"${style}><strong>${formatTotal(
            val
          )}</strong></td>`;
        })
        .join("");

    const amountTotalAging = (
      aging: ReturnType<typeof calculateTotalAging>
    ) => {
      const total =
        aging.current +
        aging.range_1_30 +
        aging.range_31_60 +
        aging.range_61_90 +
        aging.range_91_120 +
        aging.range_121_150 +
        aging.range_over_150;

      const style =
        total < 0 ? ' style="background-color: #FBC9C9; color: #C00000;"' : "";

      return `<td align="right"${style}><strong>${formatTotal(
        total
      )}</strong></td>`;
    };

    return `
    <h4>${label}</h4>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; font-size: 12px;">
      <thead style="background-color: #DDEBF7; text-align: center;">
        <tr>
          <th>Customer Code</th>
          <th>Customer's Name</th>
          <th>VALUATED AMOUNT</th>
          <th>CURR.</th>
          <th>CURRENT</th>
          <th>1-30 Days</th>
          <th>31-60 Days</th>
          <th>61-90 Days</th>
          <th>91-120 Days</th>
          <th>121-150 Days</th>
          <th>>150 Days</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #D8E4BC;">
          <td style="text-align: center;"><strong>AFFCO</strong></td>
          <td style="text-align: center;"><strong>TOTAL AFFCO</strong></td>
          <td align="right"><strong>${formatTotal(totalAffco)}</strong></td>
          <td style="text-align: center;"><strong>${affcoCurr}</strong></td>
          ${renderAgingTotals(totalAgingAffco)}
          ${amountTotalAging(totalAgingAffco)}
        </tr>
        ${affcoRows}
        <tr style="background-color: #D8E4BC;">
          <td style="text-align: center;"><strong>3RD PARTIES</strong></td>
          <td style="text-align: center;"><strong>TOTAL 3RD PARTIES</strong></td>
          <td align="right"><strong>${formatTotal(totalParties)}</strong></td>
          <td style="text-align: center;"><strong>${partiesCurr}</strong></td>
          ${renderAgingTotals(totalAgingParties)}
          ${amountTotalAging(totalAgingParties)}
        </tr>
        ${partyRows}
        <tr style="background-color: #FFC000;">
          <td colspan="2" align="center"><strong>GRAND TOTAL</strong></td>
          <td align="right"><strong>${formatTotal(grandTotal)}</strong></td>
          <td style="text-align: center;"><strong>${grandCurr}</strong></td>
          ${renderAgingTotals(totalAgingGrand)}
          ${amountTotalAging(totalAgingGrand)}
        </tr>
      </tbody>
    </table>`;
  };

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #000;">
      <h3>PT. United Tractors Pandu Engineering</h3>
      <h4>${subject}<br>${dateLabel}</h4>
      ${generateTable(dataRaw.affco, dataRaw.parties, "Tabel 1: Raw Data")}
      <br />
      ${generateTable(dataSum.affco, dataSum.parties, "Tabel 2: Summary Data")}
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      priority: "high",
      headers: {
        "X-Priority": "1",
        Priority: "high",
      },
    });
    console.log(`Email SOA ${type} berhasil dikirim`);
  } catch (error: any) {
    console.error(`Gagal mengirim email SOA ${type}:`, error.message);
  }
};
