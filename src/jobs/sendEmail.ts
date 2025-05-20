import { PrismaClient } from "../../prisma/generated/satria-client";
import { sendEmailDirect } from "../controllers/cms/EmailController";
import { getCurrentWIBDate } from "../helpers/timeHelper";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { FBL5N } from "../models/Table/Satria/FBL5N";
import { VF04 } from "../models/Table/Satria/VF04";

const prisma = new PrismaClient();

const generateEmailTemplate = (
  type: "BA" | "User",
  recipientName: string,
  totalIncidents: number,
  incidentDate: string, // format misalnya "Senin, 5 Mei 2025"
  pendingBilling: Array<{
    no: number;
    salesDocument: string;
    soldParty: string;
    picMarketing: string;
    emailUser: string;
    desc: string;
  }>,
  pendingAR: Array<{
    no: number;
    documentNumber: string;
    customerName: string;
    picFinance: string;
    emailUser: string;
    desc: string;
  }>,
  mhDiscrepancy: Array<{
    no: number;
    unitID: string;
    picManufacturing: string;
    emailUser: string;
    desc: string;
  }>,
  predictivePotentialDelay: Array<{
    no: number;
    proID: string;
    picProduction: string;
    emailUser: string;
    desc: string;
  }>,
  vendorDelivery: Array<{
    no: number;
    poID: string;
    picVendor: string;
    emailUser: string;
    desc: string;
  }>,
  subcontDelivery: Array<{
    no: number;
    poID: string;
    picSubcont: string;
    emailUser: string;
    desc: string;
  }>
) => {
  const subject = `[Reminder] Incident Management System`;

  const html = `
<div style="font-family: Arial, sans-serif; font-size: 13px; color: #000; padding: 20px;">
  <h1 style="text-align: center; margin-bottom: 4px; font-style: bold; color:#0D0E12">RECAP INCIDENT</h1>
  <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 16px;">

  <table style="width: 100%; margin-bottom: 26px;">
    <tr>
      <td style="width:50%; vertical-align:top; color:#0D0E12">
        Kepada <br/>
        <strong style="color:#0D0E12">${recipientName}</strong>
      </td>
      <td style="width:50%; vertical-align:top; color:#0D0E12">
        Tanggal <br/>
        <strong style="color:#0D0E12">
        ${new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
        </strong>
      </td>
    </tr>
  </table>

  <table style="width: 100%; margin-bottom: 36px;">
    <tr>
      <td style="width:50%; vertical-align:top; color:#0D0E12">
        Total Incidents <br/>
        <strong style="color:#0D0E12">${totalIncidents}</strong>
      </td>
      <td style="width:50%; vertical-align:top; color:#0D0E12">
        Incidents Date <br/>
        <strong style="color:#0D0E12">${incidentDate}</strong><br/>
      </td>
    </tr>
  </table>

  <div style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 8px; padding: 12px;">
    <h3 style="background-color:#328E6E; color:#fff; padding:6px 12px; border-radius:4px; margin-top: 0;">Pending Billing</h3>
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width:100%; margin-top: 8px; margin-bottom:16px;">
      <thead style="background-color:#f1f1f1;">
        <tr>
          <th>No</th>
          <th>Customer Name</th>
          <th>Triatra PIC</th>
          <th>GI Number</th>
          <th>Sales Documnet</th>
          <th>Item</th>
          <th>Product</th>
          <th>Qty</th>
          <th>Amount</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        ${pendingBilling
          .map(
            (b) => `
          <tr>
            <td style="text-align:center;">${b.no}</td>
            <td>${b.soldParty}</td>
            <td>${b.picMarketing}</td>
            <td></td>
            <td>${b.salesDocument}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 8px; padding: 12px;">
    <h3 style="background-color:#328E6E; color:#fff; padding:6px 12px; border-radius:4px; margin-top: 0;">Pending AR</h3>
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width:100%; margin-top: 8px;">
      <thead style="background-color:#f1f1f1;">
        <tr>
          <th>No</th>
          <th>Document Number</th>
          <th>Customer</th>
          <th>PIC Finance</th>
          <th>Email</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${pendingAR
          .map(
            (a) => `
          <tr>
            <td style="text-align:center;">${a.no}</td>
            <td>${a.documentNumber}</td>
            <td>${a.customerName}</td>
            <td>${a.picFinance}</td>
            <td>${a.emailUser}</td>
            <td>${a.desc}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 8px; padding: 12px;">
    <h3 style="background-color:#27548A; color:#fff; padding:6px 12px; border-radius:4px; margin-top: 0;">Manhour Discrepancy</h3>
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width:100%; margin-top: 8px; margin-bottom:16px;">
      <thead style="background-color:#f1f1f1;">
        <tr>
          <th>No</th>
          <th>Serial Number</th>
          <th>Manhour Usage</th>
          <th>Production Progress</th>
          <th>Utilization</th>
        </tr>
      </thead>
      <tbody>
        ${mhDiscrepancy
          .map(
            (b) => `
          <tr>
            <td style="text-align:center;">${b.no}</td>
            <td>${b.unitID}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 8px; padding: 12px;">
    <h3 style="background-color:#27548A; color:#fff; padding:6px 12px; border-radius:4px; margin-top: 0;">Predictive Potential Delay Operation</h3>
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width:100%; margin-top: 8px;">
      <thead style="background-color:#f1f1f1;">
        <tr>
          <th>No</th>
          <th>Serial Number</th>
          <th>MPS Due Date</th>
          <th>Estimation Delivery</th>
        </tr>
      </thead>
      <tbody>
        ${predictivePotentialDelay
          .map(
            (a) => `
          <tr>
            <td style="text-align:center;">${a.no}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    <br />
    <span style="color:red;">*Based On Engine Calculation</span>
  </div>

  <div style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 8px; padding: 12px;">
    <h3 style="background-color:#A62C2C; color:#fff; padding:6px 12px; border-radius:4px; margin-top: 0;">Subcont Delivery Performance</h3>
    <table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; width:100%; margin-top: 8px;">
      <thead style="background-color:#f1f1f1;">
        <tr>
          <th>No</th>
          <th>PO Number</th>
          <th>PO Item</th>
          <th>Qty</th>
          <th>Material</th>
          <th>Material Desc</th>
          <th>Subcont Name</th>
          <th>PO Due Date</th>
          <th>Confirmation Date</th>
        </tr>
      </thead>
      <tbody>
        ${subcontDelivery
          .map(
            (a) => `
          <tr>
            <td style="text-align:center;">${a.no}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <p style="margin-top: 24px;">Silakan cek sistem dan lakukan tindakan yang diperlukan.<br/><br/>Best regards,<br/><strong>Incident Management System</strong></p>
</div>
`;

  const text = `Reminder Incident untuk ${recipientName}
Total Incidents: ${totalIncidents}
Incident Date: ${incidentDate}
Silakan cek sistem.`;

  return { subject, text, html };
};

// Fungsi Umum untuk Mengirim Email Incident dengan Paginasi dan Efisiensi
export const sendIncidentEmails = async (type: "BA" | "User") => {
  try {
    const now = getCurrentWIBDate();
    const fieldDate = type === "BA" ? "BAEmailDate" : "UserEmailDate";
    const fieldStatus = type === "BA" ? "BAEmailStatus" : "UserEmailStatus";

    while (true) {
      let incidents: any[] = [];

      incidents = await prisma.trx_LogHistory.findMany({
        where: {
          [fieldDate]: {
            lte: now,
            // lt: startOfTomorrow,
          },
          NOT: { [fieldDate]: null },
          [fieldStatus]: "-",
        },
        select: {
          ID: true,
          SalesDocument: true,
          DocumentNumber: true,
          UnitSerialNumber: true,
          POID: true,
          PROID: true,
          IncidentType: true,
          Description: true,
          OpenDate: true,
          pic_ba: {
            select: {
              email: true,
              name: true,
            },
          },
          pic_user: {
            select: {
              email: true,
              name: true,
            },
          },
        },
      });

      if (incidents.length === 0) {
        break; // Jika tidak ada data lagi, keluar dari loop
      }

      const groupedIncidents = incidents.reduce((acc, incident) => {
        const recipientEmail =
          type === "BA" ? incident.pic_ba?.email : incident.pic_user?.email;

        if (!recipientEmail) return acc;

        if (!acc[recipientEmail]) {
          acc[recipientEmail] = {
            name:
              type === "BA" ? incident.pic_ba?.name : incident.pic_user?.name,
            incidents: [],
          };
        }

        acc[recipientEmail].incidents.push({
          ...incident,
          picUser: incident.pic_user?.name || "-",
          emailUser: incident.pic_user?.email || "-",
        });

        return acc;
      }, {} as Record<string, { name: string; incidents: any[] }>);

      const emailPromises = (
        Object.entries(groupedIncidents) as [
          string,
          { name: string; incidents: any[] }
        ][]
      ).map(async ([recipientEmail, { name, incidents }]) => {
        const totalIncidents = incidents.length;

        // Menyiapkan data untuk email
        const pendingBilling: any = [];
        const pendingAR: any = [];
        const mhDiscrepancy: any = [];
        const predictivePotentialDelay: any = [];
        const vendorDelivery: any = [];
        const subcontDelivery: any = [];

        // Menggabungkan data untuk email
        for (const incident of incidents) {
          if (incident.DocumentNumber) {
            const dataAR = await FBL5N.findFirst({
              where: {
                DocumentNumber: incident.DocumentNumber.toString(),
              },
              select: {
                CustomerName: true,
              },
            });

            pendingAR.push({
              no: pendingAR.length + 1,
              documentNumber: incident.DocumentNumber.toString(),
              customerName: dataAR?.CustomerName || "-",
              picFinance: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });
          }

          if (incident.SalesDocument) {
            const dataBilling = await VF04.findFirst({
              where: {
                SalesDocument: incident.SalesDocument.toString(),
              },
              select: {
                NameSoldToParty: true,
              },
            });

            pendingBilling.push({
              no: pendingBilling.length + 1,
              salesDocument: incident.SalesDocument.toString(),
              soldParty: dataBilling?.NameSoldToParty || "-",
              picMarketing: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });
          }

          if (incident.UnitSerialNumber) {
            mhDiscrepancy.push({
              no: mhDiscrepancy.length + 1,
              unitID: incident.UnitSerialNumber,
              picManufacturing: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });
          }

          if (incident.PROID) {
            predictivePotentialDelay.push({
              no: predictivePotentialDelay.length + 1,
              proID: incident.PROID.toString(),
              picProduction: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });
          }

          if (incident.POID) {
            vendorDelivery.push({
              no: vendorDelivery.length + 1,
              poID: incident.POID.toString(),
              picVendor: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });

            subcontDelivery.push({
              no: subcontDelivery.length + 1,
              poID: incident.POID.toString(),
              picSubcont: incident.picUser || "-",
              emailUser: incident.emailUser || "-",
              desc: incident.Description || "-",
            });
          }
        }

        const openDate = format(
          new Date(incidents[0]?.OpenDate),
          "EEEE, dd MMMM yyyy",
          {
            locale: id,
          }
        );

        const { subject, text, html } = generateEmailTemplate(
          type,
          name || "-",
          totalIncidents,
          openDate, // Menggunakan OpenDate dari incident pertama
          pendingBilling,
          pendingAR,
          mhDiscrepancy,
          predictivePotentialDelay,
          vendorDelivery,
          subcontDelivery
        );

        await sendEmailDirect({ to: recipientEmail, subject, text, html });

        // Update status email yang sudah dikirim
        for (const incident of incidents) {
          await prisma.trx_LogHistory.update({
            where: { ID: incident.ID },
            data: { [fieldStatus]: "Sent" },
          });
        }

        console.log(
          `[${now.toISOString()}] ✅ ${type} Email sent to: ${recipientEmail} (Total incidents: ${totalIncidents})`
        );
      });

      await Promise.all(emailPromises); // Kirim email secara paralel
    }
  } catch (error) {
    console.error(`❌ Error while sending ${type} emails:`, error);
  }
};
