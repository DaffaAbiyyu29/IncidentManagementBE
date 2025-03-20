// src/controllers/cms/VF04Controller.ts
import { Request, Response } from "express";
import { VF04 } from "../../models/Table/Satria/VF04";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

// View all dataVF04
export const getAllVF04 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "NameSoldToParty",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;

    const validSortFields = [
      "ID",
      "BillCategory",
      "SalesOrg",
      "BillDate",
      "SoldToParty",
      "BillType",
      "Country",
      "SalesDocument",
      "DistributionChannel",
      "Division",
      "DocCategory",
      "Address",
      "NameSoldToParty",
      "LocSoldToParty",
      "SortTerm",
      "ItemsRead",
      "Counter",
      "ShippingPoint",
      "PODStatus",
      "NetValue",
      "DocCurrency",
      "SDDocumentType",
      "NameSDType",
      "BDRSrcDoc",
      "RefSys",
      "DraftMode",
      "DBDRef",
      "SolutionOrder",
      "BillDate2",
      "BillType2",
      "Groups",
      "PONumber",
      "ShippingPointDesc",
      "SOPOAmount",
      "Exrate",
      "created_at",
      "updated_at",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "SoldToParty"; // Default sort field
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataVF04Data = await VF04.findMany({
      where: {
        OR: [
          { NameSoldToParty: { contains: search as string } },
          { SalesDocument: { equals: parseInt(search as string) } },
          { SoldToParty: { contains: search as string } },
        ],
      },
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const totalItems = await VF04.count({
      where: {
        OR: [
          { NameSoldToParty: { contains: search as string } },
          { SalesDocument: { equals: parseInt(search as string) } },
          { SoldToParty: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = dataVF04Data.map((item) => {
      const billDate = item.BillDate ? new Date(item.BillDate) : new Date();

      let slaCCDays = 7;
      if (item.NameSoldToParty?.toLowerCase() === "EX WORK") {
        slaCCDays = 7;
      } else if (item.NameSoldToParty?.toLowerCase() === "LOCO") {
        slaCCDays = 30;
      }
      const slaCC = new Date(billDate);
      slaCC.setDate(slaCC.getDate() + slaCCDays);

      const slaUser = new Date(slaCC);
      slaUser.setDate(slaUser.getDate() + 7);

      return {
        ...item,
        ID: Number(item.ID),
        SalesOrg: Number(item.SalesOrg),
        SalesDocument: Number(item.SalesDocument),
        DistributionChannel: Number(item.DistributionChannel),
        Division: Number(item.Division),
        Address: Number(item.Address),
        BillDate: formattedDate(item.BillDate),
        BillDate2: formattedDate(item.BillDate2),
        created_at: formattedDate(item.created_at),
        updated_at: formattedDate(item.updated_at),
        SLACC: formattedDate(slaCC),
        SLAUser: formattedDate(slaUser),
        Status: "-",
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data VF04",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching VF04 data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data VF04" });
  }
};

// // View dataVF04 by ID
// export const getVF04ById = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   try {
//     const dataVF04 = await VF04.findUnique({
//       where: { id: Number(id) },
//     });
//     if (!dataVF04) {
//       res
//         .status(404)
//         .json({ success: false, message: "VF04 tidak ditemukan" });
//     } else {
//       res.status(200).json({
//         success: true,
//         message: "Berhasil mengambil data dataVF04",
//         data: { dataVF04 },
//       });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error mengambil data dataVF04" });
//   }
// };

// // Create dataVF04
// export const createVF04 = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { nama, deskripsi, harga, stok } = req.body;
//   try {
//     const newVF04 = await VF04.create({
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
//       message: "VF04 berhasil ditambahkan",
//       data: { newVF04 },
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error menambahkan data dataVF04" });
//   }
// };

// // Update dataVF04
// export const updateVF04 = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   const { nama, deskripsi, harga, stok } = req.body;
//   try {
//     const updatedVF04 = await VF04.update({
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
//       message: "VF04 berhasil diupdate",
//       data: { updatedVF04 },
//     });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error mengupdate data dataVF04" });
//   }
// };

// // Delete dataVF04
// export const deleteVF04 = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { id } = req.params;
//   try {
//     const deletedVF04 = await VF04.delete({
//       where: { id: Number(id) },
//     });
//     if (!deletedVF04) {
//       res
//         .status(404)
//         .json({ success: false, message: "VF04 tidak ditemukan" });
//     } else {
//       res.status(201).json({
//         success: true,
//         message: "VF04 berhasil dihapus",
//       });
//     }
//   } catch (err) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error menghapus data dataVF04" });
//   }
// };
