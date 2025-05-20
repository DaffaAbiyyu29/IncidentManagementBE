// src/controllers/cms/FBL5NController.ts
import { Request, Response } from "express";
import { FBL5N } from "../../models/Table/Satria/FBL5N";
import { getCurrentWIBDate, getEndOfMonthDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Incident } from "../../models/Table/Satria/trx_LogHistory";
import { IDataFBL5N } from "../../interface/allData";
import { ISOA } from "../../interface/ISOA";

// View all dataFBL5N
export const getAllFBL5N = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "NetDueDate",
      month = String(new Date().getMonth() + 1).padStart(2, "0"),
      year = String(new Date().getFullYear()),
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface DataFBL5N
    const validSortFields = Object.keys(
      {} as IDataFBL5N // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "CustomerName"; // Fallback jika sort tidak valid

    const dataFBL5N = await FBL5N.findMany({
      where: {
        NetDueDate: {
          gte: new Date(`${year}-${month}-01`),
          lt: new Date(
            `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`
          ),
        },
        OR: [
          { CustomerName: { contains: search as string } },
          { DocumentNumber: { contains: search as string } },
          { CompanyCode: { contains: search as string } },
        ],
      },
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const totalItems = await FBL5N.count({
      where: {
        NetDueDate: {
          gte: new Date(`${year}-${month}-01`),
          lt: new Date(
            `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`
          ),
        },
        OR: [
          { CustomerName: { contains: search as string } },
          { DocumentNumber: { contains: search as string } },
          { CompanyCode: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai dengan interface DataFBL5N
    const serializedData: IDataFBL5N[] = dataFBL5N.map((item: any) => {
      return {
        ID: Number(item.ID),
        GlAccount: item.GlAccount,
        Reference: item.Reference,
        Assignment: item.Assignment,
        DocumentNumber: item.DocumentNumber,
        DocumentType: item.DocumentType,
        PostingDate: item.PostingDate,
        ClearingDate: item.ClearingDate,
        DocumentDate: item.DocumentDate,
        NetDueDate: item.NetDueDate,
        SpecialGlInd: item.SpecialGlInd,
        BusinessArea: item.BusinessArea,
        Plant: item.Plant,
        ProfitCenter: item.ProfitCenter,
        Account: item.Account,
        CustomerName: item.CustomerName,
        AmountDocCurr: item.AmountDocCurr,
        DocumentCurrency: item.DocumentCurrency,
        AmountLocalCurrency: item.AmountLocalCurrency,
        LocalCurrency: item.LocalCurrency,
        ReverseClearing: item.ReverseClearing,
        PostingKey: item.PostingKey,
        DebitCreditInd: item.DebitCreditInd,
        ClearingDocument: item.ClearingDocument,
        Username: item.Username,
        Text: item.Text,
        CompanyCode: item.CompanyCode,
        created_at: item.created_at,
        updated_at: item.updated_at,
        // Properti tambahan yang tidak ada di interface DataFBL5N tidak disertakan
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data FBL5N",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching FBL5N data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data FBL5N" });
  }
};

export const detectPendingAR = async (): Promise<void> => {
  try {
    const currentWIB = getCurrentWIBDate();

    const dataPendingAR = await FBL5N.findMany({
      where: {
        DocumentNumber: {
          not: null,
        },
        DocumentDate: {
          not: null,
        },
        AND: [{ ClearingDate: null }, { ClearingDocument: null }],
      },
    });

    const results: any[] = [];

    // let arType;
    // const topDay = arType === "Exwork" ? 7 : arType === "Loco" ? 14 : 0;

    for (const item of dataPendingAR) {
      // Pastikan NetDueDate ada
      if (!item.NetDueDate) continue;

      // Cek apakah hari ini >= NetDueDate - 10 hari
      const netDueDate = new Date(item.NetDueDate);
      const thresholdDate = new Date(netDueDate);
      thresholdDate.setDate(netDueDate.getDate() - 10);

      if (currentWIB < thresholdDate) {
        // Belum 10 hari sebelum NetDueDate, skip
        continue;
      }

      const existingIncident = await Incident.findFirst({
        where: {
          DocumentNumber: Number(item.DocumentNumber),
        },
      });

      if (existingIncident) continue;

      // let baEmailDate = new Date(item.NetDueDate);
      // baEmailDate.setDate(baEmailDate.getDate() - 10);
      let baEmailDate = new Date(currentWIB);
      baEmailDate.setDate(currentWIB.getDate() + 1);

      let userEmailDate = new Date(item.NetDueDate);
      userEmailDate.setDate(userEmailDate.getDate() - 3);

      const newIncident = await Incident.create({
        data: {
          DocumentNumber: Number(item.DocumentNumber),
          IncidentType: "Pending AR",
          Description: `Auto-created from AR ID: ${item.DocumentNumber}`,
          PICBA: 1,
          BAEmailDate: baEmailDate,
          BAEmailStatus: "-",
          PICUser: 2,
          UserEmailDate: userEmailDate,
          UserEmailStatus: "-",
          OpenDate: currentWIB,
          CloseDate: null,
          Status: "-",
        },
      });

      console.log(
        `[${new Date().toLocaleString()}] ${
          results.length + 1
        } incident berhasil dibuat dari FBL5N`
      );

      results.push(newIncident);
    }
  } catch (error) {
    console.error("Error create Incident From FBL5N Detect:", error);
  }
};

const getAgeCategory = (soaDate: Date, documentDate: Date | string) => {
  const docDate = new Date(documentDate);
  const diffDays = Math.floor(
    (soaDate.getTime() - docDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays <= 30) return "current";
  if (diffDays <= 60) return "range_1_30";
  if (diffDays <= 90) return "range_31_60";
  if (diffDays <= 120) return "range_61_90";
  if (diffDays <= 150) return "range_91_120";
  if (diffDays <= 180) return "range_121_150";
  return "range_over_150";
};

export const dataSOAAR = async () => {
  const affco: ISOA[] = [];
  const parties: ISOA[] = [];

  const incidentAR = await Incident.findMany({
    where: {
      AND: [{ IncidentType: "Pending AR", NOT: { Status: "Closed" } }],
    },
    select: {
      DocumentNumber: true,
    },
  });

  const customerSummary: Record<string, ISOA> = {};

  for (const ar of incidentAR) {
    if (!ar.DocumentNumber) continue;

    const dataAR = await FBL5N.findFirst({
      where: { DocumentNumber: ar.DocumentNumber.toString() },
    });

    if (!dataAR) continue;

    const account = dataAR.Account || "-";
    const amount = Number(dataAR.AmountDocCurr) || 0;
    const currency = dataAR.DocumentCurrency || "-";
    const customerName = dataAR.CustomerName || "-";
    const documentDate = dataAR.DocumentDate || "";

    const agingCategory = getAgeCategory(getEndOfMonthDate(), documentDate);

    // Inisialisasi jika belum ada
    if (!customerSummary[customerName]) {
      customerSummary[customerName] = {
        code: account,
        customerName,
        valuatedAmount: "0",
        curr: currency,
        current: "0",
        range_1_30: "0",
        range_31_60: "0",
        range_61_90: "0",
        range_91_120: "0",
        range_121_150: "0",
        range_over_150: "0",
      };
    }

    const customerData = customerSummary[customerName];

    // Tambah amount total
    customerData.valuatedAmount = (
      Number(customerData.valuatedAmount) + amount
    ).toString();

    // Tambah sesuai aging category
    switch (agingCategory) {
      case "current":
        customerData.current = (
          Number(customerData.current) + amount
        ).toString();
        break;
      case "range_1_30":
        customerData.range_1_30 = (
          Number(customerData.range_1_30) + amount
        ).toString();
        break;
      case "range_31_60":
        customerData.range_31_60 = (
          Number(customerData.range_31_60) + amount
        ).toString();
        break;
      case "range_61_90":
        customerData.range_61_90 = (
          Number(customerData.range_61_90) + amount
        ).toString();
        break;
      case "range_91_120":
        customerData.range_91_120 = (
          Number(customerData.range_91_120) + amount
        ).toString();
        break;
      case "range_121_150":
        customerData.range_121_150 = (
          Number(customerData.range_121_150) + amount
        ).toString();
        break;
      case "range_over_150":
        customerData.range_over_150 = (
          Number(customerData.range_over_150) + amount
        ).toString();
        break;
    }
  }

  // Setelah looping selesai, ubah hasil ke array
  const summarizedData = Object.values(customerSummary);

  // Pisahkan ke parties dan affco berdasarkan aturan account
  for (const row of summarizedData) {
    const account = row.code;
    const isNumeric = /^\d+$/.test(account);
    const isAlphabetic = /[a-zA-Z]/.test(account);
    const length = account.length;

    if (isNumeric && length === 8) {
      parties.push(row);
    } else if ((!isNumeric || isAlphabetic) && length < 8) {
      affco.push(row);
    }
  }

  const fallback: ISOA = {
    code: "-",
    customerName: "-",
    valuatedAmount: "0",
    curr: "-",
    current: "-",
    range_1_30: "-",
    range_31_60: "-",
    range_61_90: "-",
    range_91_120: "-",
    range_121_150: "-",
    range_over_150: "-",
  };

  return {
    affco: affco.length ? affco : [fallback],
    parties: parties.length ? parties : [fallback],
  };
};

export const dataSOAARRaw = async () => {
  const affco: ISOA[] = [];
  const parties: ISOA[] = [];

  const incidentAR = await Incident.findMany({
    where: {
      AND: [{ IncidentType: "Pending AR", NOT: { Status: "Closed" } }],
    },
    select: {
      DocumentNumber: true,
    },
  });

  for (const ar of incidentAR) {
    if (!ar.DocumentNumber) continue;

    const dataAR = await FBL5N.findFirst({
      where: { DocumentNumber: ar.DocumentNumber.toString() },
    });

    if (!dataAR) continue;

    const account = dataAR.Account || "-";
    const amount = Number(dataAR.AmountDocCurr) || 0;
    const currency = dataAR.DocumentCurrency || "-";
    const customerName = dataAR.CustomerName || "-";
    const documentDate = dataAR.DocumentDate || "";

    const agingCategory = getAgeCategory(getEndOfMonthDate(), documentDate);

    const row: ISOA = {
      code: account,
      customerName,
      valuatedAmount: amount.toString(),
      curr: currency,
      current: agingCategory === "current" ? amount.toString() : "-",
      range_1_30: agingCategory === "range_1_30" ? amount.toString() : "-",
      range_31_60: agingCategory === "range_31_60" ? amount.toString() : "-",
      range_61_90: agingCategory === "range_61_90" ? amount.toString() : "-",
      range_91_120: agingCategory === "range_91_120" ? amount.toString() : "-",
      range_121_150:
        agingCategory === "range_121_150" ? amount.toString() : "-",
      range_over_150:
        agingCategory === "range_over_150" ? amount.toString() : "-",
    };

    const isNumeric = /^\d+$/.test(account);
    const isAlphabetic = /[a-zA-Z]/.test(account);
    const length = account.length;

    if (isNumeric && length === 8) {
      parties.push(row);
    } else if ((!isNumeric || isAlphabetic) && length < 8) {
      affco.push(row);
    }
  }

  const fallback: ISOA = {
    code: "-",
    customerName: "-",
    valuatedAmount: "0",
    curr: "-",
    current: "-",
    range_1_30: "-",
    range_31_60: "-",
    range_61_90: "-",
    range_91_120: "-",
    range_121_150: "-",
    range_over_150: "-",
  };

  return {
    affco: affco.length ? affco : [fallback],
    parties: parties.length ? parties : [fallback],
  };
};
