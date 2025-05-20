// src/controllers/cms/VF04Controller.ts
import { Request, Response } from "express";
import { VF04 } from "../../models/Table/Satria/VF04";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Incident } from "../../models/Table/Satria/trx_LogHistory";
import { IDataVF04 } from "../../interface/allData";

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
      sort = "BillDate", // Default sort field
      month = String(new Date().getMonth() + 1).padStart(2, "0"),
      year = String(new Date().getFullYear()),
      order = "asc",
      type = 0,
    } = req.query;

    const now = getCurrentWIBDate();

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface IDataVF04
    const validSortFields = Object.keys(
      {} as IDataVF04 // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "SoldToParty"; // Fallback jika sort tidak valid

    const dataVF04Data = await VF04.findMany({
      where: {
        BillDate: {
          gte: new Date(`${year}-${month}-01`),
          lt: new Date(
            `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`
          ),
        },
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

    const incidents = await Incident.findMany({
      where: { IncidentType: "Pending Billing" },
      include: {
        pic_ba: true,
        pic_user: true,
      },
    });

    // Matching VF04.ID === Incident.SalesDocument
    let resultData = dataVF04Data.filter((vf04Item) => {
      const matchedIncidents = incidents.filter(
        (incident) =>
          Number(incident.SalesDocument) === Number(vf04Item.SalesDocument)
      );

      // Jika tidak ada incident yang match => return true (masuk resultData)
      if (matchedIncidents.length === 0) return true;

      // Jika ada incident, cek apakah setidaknya satu memenuhi kondisi CloseDate !== null && Status !== "-"
      const validIncidentExists = matchedIncidents.some(
        (incident) => incident.CloseDate !== null && incident.Status !== "-"
      );

      return validIncidentExists;
    });

    if (Number(type) === 1) {
      resultData = dataVF04Data
        .map((vf04Item) => {
          const matchedIncidents = incidents.filter((incident) => {
            if (!incident.BAEmailDate) return false;
            if (!incident.UserEmailDate) return false;
            const baEmailDate = new Date(incident.BAEmailDate);
            const userEmailDate = new Date(incident.UserEmailDate);
            return (
              Number(incident.SalesDocument) ===
                Number(vf04Item.SalesDocument) && now >= baEmailDate
            );
          });

          return {
            ...vf04Item,
            incidents: matchedIncidents,
          };
        })
        .filter((item) => item.incidents.length > 0);
    } else if (Number(type) === 2) {
      resultData = dataVF04Data
        .map((vf04Item) => {
          const matchedIncidents = incidents.filter((incident) => {
            if (!incident.UserEmailDate) return false;
            const userEmailDate = new Date(incident.UserEmailDate);
            return (
              Number(incident.SalesDocument) ===
                Number(vf04Item.SalesDocument) && now >= userEmailDate
            );
          });

          return {
            ...vf04Item,
            incidents: matchedIncidents,
          };
        })
        .filter((item) => item.incidents.length > 0);
    }

    const totalItems = resultData.length;

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai dengan interface IDataVF04
    const serializedData: IDataVF04[] = resultData.map((item: any) => {
      return {
        ...item,
        ID: Number(item.ID),
        SalesOrg: Number(item.SalesOrg),
        SalesDocument: Number(item.SalesDocument),
        DistributionChannel: Number(item.DistributionChannel),
        Division: Number(item.Division),
        Address: Number(item.Address),
        BillDate: item.BillDate,
        BillDate2: item.BillDate2,
        created_at: item.created_at,
        updated_at: item.updated_at,
        incidents: item.incidents, // pastikan ikut serialisasi juga
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
  } catch (err: any) {
    console.error("Error fetching VF04 data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data VF04" });
  }
};

export const detectPendingBilling = async (): Promise<void> => {
  try {
    const currentWIB = getCurrentWIBDate();

    const dataPendingBilling = await VF04.findMany({
      where: {
        BillDate: {
          lte: currentWIB,
        },
        AND: {
          OR: [{ PONumber: null }, { PONumber: "" }, { PONumber: undefined }],
        },
      },
    });

    const results: any[] = [];

    for (const item of dataPendingBilling) {
      const existingIncident = await Incident.findFirst({
        where: {
          SalesDocument: Number(item.SalesDocument),
        },
      });

      if (existingIncident) continue;

      let baEmailDate = new Date(currentWIB);
      baEmailDate.setDate(currentWIB.getDate() + 1);
      // let baEmailDate = new Date(item.BillDate!);
      // baEmailDate.setDate(baEmailDate.getDate() + 1);

      let userEmailDate = new Date(item.BillDate!);
      userEmailDate.setDate(userEmailDate.getDate() + 3);

      const newIncident = await Incident.create({
        data: {
          SalesDocument: Number(item.SalesDocument), //ganti jadi SalesDocument
          IncidentType: "Pending Billing",
          Description: `Auto-created from Billing ID: ${item.SalesDocument}`,
          PICBA: 1,
          BAEmailDate: baEmailDate,
          BAEmailStatus: "-",
          PICUser: 3,
          UserEmailDate: userEmailDate,
          UserEmailStatus: "-",
          OpenDate: currentWIB,
          CloseDate: null,
          Status: "-",
        },
      });

      console.log(
        `[${new Date().toLocaleString()}] ${
          results.length
        } incident berhasil dibuat dari VF04`
      );

      results.push(newIncident);
    }
  } catch (error) {
    console.error("Error create Incident From VF04 Detect:", error);
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
