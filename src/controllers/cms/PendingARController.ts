// src/controllers/cms/FBL5NController.ts
import { Request, Response } from "express";
import { FBL5N } from "../../models/Table/Satria/FBL5N";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

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
      sort = "CustomerName",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const validSortFields = [
      "ID",
      "GLAccount",
      "Reference",
      "Assignment",
      "DocumentNumber",
      "DocumentType",
      "PostingDate",
      "ClearingDate",
      "DocumentDate",
      "NetDueDate",
      "SpecialGLInd",
      "BusinessArea",
      "Plant",
      "ProfitCenter",
      "Account",
      "CustomerName",
      "AmountDocCurr",
      "DocumentCurrency",
      "AmountLocalCurrency",
      "LocalCurrency",
      "ReverseClearing",
      "PostingKey",
      "DebitCreditInd",
      "ClearingDocument",
      "Username",
      "Text",
      "CompanyCode",
      "created_at",
      "updated_at",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "CustomerName";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataFBL5NData = await FBL5N.findMany({
      where: {
        OR: [
          { CustomerName: { contains: search as string } },
          { DocumentNumber: { contains: search as string } },
          { CompanyCode: { contains: search as string } },
        ],
      },
      orderBy: { [sortField]: sortOrder },
      skip,
      take: pageSize,
    });

    const totalItems = await FBL5N.count({
      where: {
        OR: [
          { CustomerName: { contains: search as string } },
          { DocumentNumber: { contains: search as string } },
          { CompanyCode: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);
    const today = new Date();

    // Konversi BigInt ke string dan format tanggal sebelum dikembalikan sebagai response
    const serializedData = dataFBL5NData.map((item) => {
      const documentDate = item.DocumentDate
        ? new Date(item.DocumentDate)
        : new Date();

      let slaCCDays = 45;
      if (item.CustomerName?.toLowerCase() === "sapta indra sejati") {
        slaCCDays = 60;
      } else if (
        ["buma", "kaltim prima coal"].includes(
          item.CustomerName?.toLowerCase() ?? ""
        )
      ) {
        slaCCDays = 75;
      }

      const slaCC = new Date(documentDate);
      slaCC.setDate(slaCC.getDate() + slaCCDays);

      const slaUser = new Date(slaCC);
      slaUser.setDate(slaUser.getDate() + 7);

      // Menentukan status Pending atau Tidak
      let status = "Closed";
      if (!item.ClearingDocument && today > slaUser) {
        status = "Pending";
      }

      return {
        ...item,
        ID: Number(item.ID),
        PostingDate: formattedDate(item.PostingDate ?? ""),
        ClearingDate: formattedDate(item.ClearingDate ?? ""),
        DocumentDate: formattedDate(item.DocumentDate ?? ""),
        NetDueDate: formattedDate(item.NetDueDate ?? ""),
        created_at: formattedDate(item.created_at ?? ""),
        updated_at: formattedDate(item.updated_at ?? ""),
        SLACC: formattedDate(slaCC),
        SLAUser: formattedDate(slaUser),
        Status: status,
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

export const getAllFBL5NIncident = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "CustomerName",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const validSortFields = [
      "ID",
      "GLAccount",
      "Reference",
      "Assignment",
      "DocumentNumber",
      "DocumentType",
      "PostingDate",
      "ClearingDate",
      "DocumentDate",
      "NetDueDate",
      "SpecialGLInd",
      "BusinessArea",
      "Plant",
      "ProfitCenter",
      "Account",
      "CustomerName",
      "AmountDocCurr",
      "DocumentCurrency",
      "AmountLocalCurrency",
      "LocalCurrency",
      "ReverseClearing",
      "PostingKey",
      "DebitCreditInd",
      "ClearingDocument",
      "Username",
      "Text",
      "CompanyCode",
      "created_at",
      "updated_at",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "CustomerName";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataFBL5NData = await FBL5N.findMany({
      where: {
        ClearingDate: null, // Filter hanya data yang belum lunas
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
        ClearingDate: null,
        OR: [
          { CustomerName: { contains: search as string } },
          { DocumentNumber: { contains: search as string } },
          { CompanyCode: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = dataFBL5NData.map((item) => {
      const documentDate = item.DocumentDate
        ? new Date(item.DocumentDate)
        : new Date();
      let slaCCDays = 45;
      if (item.CustomerName?.toLowerCase() === "sapta indra sejati") {
        slaCCDays = 60;
      } else if (
        ["buma", "kaltim prima coal"].includes(
          item.CustomerName?.toLowerCase() ?? ""
        )
      ) {
        slaCCDays = 75;
      }
      const slaCC = new Date(documentDate);
      slaCC.setDate(slaCC.getDate() + slaCCDays);
      const slaUser = new Date(slaCC);
      slaUser.setDate(slaUser.getDate() + 7);

      let status = "On Track";
      const today = new Date();
      if (today > slaCC) {
        status = "Overdue";
      }
      if (today > slaUser) {
        status = "Critical";
      }

      return {
        ...item,
        ID: Number(item.ID),
        PostingDate: formattedDate(item.PostingDate ?? ""),
        ClearingDate: formattedDate(item.ClearingDate ?? ""),
        DocumentDate: formattedDate(item.DocumentDate ?? ""),
        NetDueDate: formattedDate(item.NetDueDate ?? ""),
        created_at: formattedDate(item.created_at ?? ""),
        updated_at: formattedDate(item.updated_at ?? ""),
        SLACC: formattedDate(slaCC),
        SLAUser: formattedDate(slaUser),
        Status: status,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data FBL5N dengan ClearingDate null",
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

// // View dataFBL5N by ID
// export const getFBL5NById = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   try {
//     const dataFBL5N = await FBL5N.findUnique({
//       where: { id: Number(id) },
//     });
//     if (!dataFBL5N) {
//       res
//         .status(404)
//         .json({ success: false, message: "FBL5N tidak ditemukan" });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Berhasil mengambil data dataFBL5N",
//         data: { dataFBL5N },
//       });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error mengambil data dataFBL5N" });
//   }
// };

// // Create dataFBL5N
// export const createFBL5N = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { nama, deskripsi, harga, stok } = req.body;
//   try {
//     const newFBL5N = await FBL5N.create({
//       data: {
//         nama,
//         deskripsi,
//         harga,
//         stok,
//         created_at: getCurrentWIBDate(),
//         updated_at: getCurrentWIBDate(),
//       },
//     });
//     res.status(201).json({
//       success: true,
//       message: "FBL5N berhasil ditambahkan",
//       data: { newFBL5N },
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error menambahkan data dataFBL5N" });
//   }
// };

// // Update dataFBL5N
// export const updateFBL5N = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   const { nama, deskripsi, harga, stok } = req.body;
//   try {
//     const updatedFBL5N = await FBL5N.update({
//       where: { id: Number(id) },
//       data: {
//         nama,
//         deskripsi,
//         harga,
//         stok,
//         updated_at: getCurrentWIBDate(),
//       },
//     });
//     res.status(201).json({
//       success: true,
//       message: "FBL5N berhasil diupdate",
//       data: { updatedFBL5N },
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error mengupdate data dataFBL5N" });
//   }
// };

// // Delete dataFBL5N
// export const deleteFBL5N = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   try {
//     const deletedFBL5N = await FBL5N.delete({
//       where: { id: Number(id) },
//     });
//     if (!deletedFBL5N) {
//       res
//         .status(404)
//         .json({ success: false, message: "FBL5N tidak ditemukan" });
//     } else {
//       res.status(201).json({
//         success: true,
//         message: "FBL5N berhasil dihapus",
//       });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error menghapus data dataFBL5N" });
//   }
// };
