import { Request, Response } from "express";
import { PrismaClient } from "../../../prisma/generated/satria-client";
import { Incident } from "../../models/Table/Satria/trx_LogHistory";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { ILogHistory } from "../../interface/allData";

const prisma = new PrismaClient();

// GET All Incidents with pagination, search, and sort
export const getAllIncidents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "ID",
      order = "asc",
      type = "",
      flag = 2,
      isClosed = "false",
      month = String(new Date().getMonth() + 1).padStart(2, "0"),
      year = String(new Date().getFullYear()),
    } = req.query;

    const now = getCurrentWIBDate();

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface IDataVF04
    const validSortFields = Object.keys(
      {} as ILogHistory // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ID"; // Fallback jika sort tidak valid

    // Membuat whereClause dengan filter berdasarkan type, search, dan tanggal
    const whereClause: any = {
      AND: [
        // {
        //   IncidentType: {
        //     contains: "",
        //   },
        // },
        {
          OpenDate: {
            gte: new Date(`${year}-${month}-01`),
            lt: new Date(
              `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`
            ),
          },
        },
      ],
    };

    // Menambahkan filter type jika ada
    if (type != "All Categories") {
      whereClause.AND.push({
        IncidentType: {
          contains: type as string,
        },
      });
    }

    if (flag != 2) {
      whereClause.AND.push({
        FlagStatus: Number(flag),
      });
    }

    if (isClosed === "false") {
      whereClause.AND.push({
        AND: {
          CloseDate: null,
          Status: { not: "Closed" },
        },
      });
    } else if (isClosed === "true") {
      whereClause.AND.push({
        AND: {
          CloseDate: { not: null },
          Status: "Closed",
        },
      });
    }

    // Menambahkan filter search jika ada
    if (search) {
      const searchNumber = parseInt(search as string, 10);
      const isNumber = !isNaN(searchNumber);

      whereClause.AND.push({
        OR: [
          { Description: { contains: search as string } },
          { IncidentType: { contains: search as string } },
          { Status: { contains: search as string } },
          {
            UnitSerialNumber: {
              contains: search as string,
            },
          },
          { FeedbackBA: { contains: search as string } },
          { FeedbackUser: { contains: search as string } },
          {
            BAEmailStatus: { contains: search as string },
          },
          {
            UserEmailStatus: {
              contains: search as string,
            },
          },
          // dari field tambahan hasil include
          {
            pic_ba: {
              name: { contains: search as string },
            },
          },
          {
            pic_ba: {
              email: { contains: search as string },
            },
          },
          {
            pic_user: {
              name: { contains: search as string },
            },
          },
          {
            pic_user: {
              email: { contains: search as string },
            },
          },
          ...(isNumber
            ? [
                { ID: searchNumber },
                { SalesDocument: searchNumber },
                { DocumentNumber: searchNumber },
                { POID: searchNumber },
                { PROID: searchNumber },
                { FlagStatus: searchNumber },
              ]
            : []),
        ],
      });
    }

    const incidents = await Incident.findMany({
      where: whereClause,
      orderBy: { [sortField]: sortOrder },
      include: {
        pic_ba: true,
        pic_user: true,
        // TIDAK PERLU: trx_PICA
      },
      skip,
      take: pageSize,
    });

    // Menambahkan PIC Email ke dalam data incidents
    const incidentsWithPIC = incidents.map((incident) => ({
      ...incident,
      PICBAEmail: incident.pic_ba?.email, // Menambahkan email PIC
      PICUserEmail: incident.pic_user?.email, // Menambahkan email PIC
    }));

    const totalItems = await Incident.count({
      where: whereClause, // pakai filter yang sama
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData: ILogHistory[] = incidents.map((incident) => ({
      id: incident.ID,
      incidentID:
        incident.UnitSerialNumber ||
        incident.SalesDocument ||
        incident.DocumentNumber ||
        incident.POID ||
        incident.PROID ||
        "", // fallback agar tidak null
      description: incident.Description || "",
      incidentType: incident.IncidentType || "",
      ba: incident.pic_ba?.name ?? "",
      baEmail: incident.pic_ba?.email ?? "",
      baEmailDate: incident.BAEmailDate || "", // atau new Date() jika ingin default ke tanggal sekarang
      baEmailStatus: incident.BAEmailStatus || "",
      user: incident.pic_user?.name ?? "",
      userEmail: incident.pic_user?.email ?? "",
      userEmailDate: incident.UserEmailDate || "",
      userEmailStatus: incident.UserEmailStatus || "",
      openDate: incident.OpenDate || "",
      closeDate: incident.CloseDate || "",
      feedbackBa: incident.FeedbackBA || "",
      feedbackBaDate: incident.FeedbackBADate || "",
      feedbackUser: incident.FeedbackUser || "",
      feedbackUserDate: incident.FeedbackUserDate || "",
      flagStatus: incident.FlagStatus || 0,
      status: incident.Status || "",
    }));

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Incident",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (error) {
    console.error("Error getAllIncidents:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data Incident",
    });
  }
};

// CREATE Incident
export const createIncident = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      UnitSerialNumber,
      SalesDocument,
      DocumentNumber,
      POID,
      PROID,
      Description,
      PICBAID,
      BAEmailDate,
      PICUserID,
      UserEmailDate,
      OpenDate,
      Status,
    } = req.body;

    const existing = await Incident.findFirst({
      where: {
        OR: [
          { UnitSerialNumber: UnitSerialNumber ?? undefined },
          { SalesDocument: SalesDocument ?? undefined },
          { DocumentNumber: DocumentNumber ?? undefined },
          { POID: POID ?? undefined },
          { PROID: PROID ?? undefined },
        ],
      },
    });

    if (existing) {
      res.status(400).json({
        success: false,
        message: "Incident dengan ID terkait sudah ada",
      });
      return;
    }

    let incidentType;
    if (
      UnitSerialNumber &&
      !SalesDocument &&
      !DocumentNumber &&
      !POID &&
      !PROID
    ) {
      incidentType = "Manhour Discrepancy";
    } else if (
      !UnitSerialNumber &&
      SalesDocument &&
      !DocumentNumber &&
      !POID &&
      !PROID
    ) {
      incidentType = "Pending Billing";
    } else if (
      !UnitSerialNumber &&
      !SalesDocument &&
      DocumentNumber &&
      !POID &&
      !PROID
    ) {
      incidentType = "Pending AR";
    } else if (
      !UnitSerialNumber &&
      !SalesDocument &&
      !DocumentNumber &&
      POID &&
      !PROID
    ) {
      if (incidentType === "Vendor") {
        incidentType = "Vendor Delivery";
      } else if (incidentType === "Subcont") {
        incidentType = "Subcont Delivery";
      }
    } else if (
      !UnitSerialNumber &&
      !SalesDocument &&
      !DocumentNumber &&
      !POID &&
      PROID
    ) {
      incidentType = "Predictive Potential Delay";
    } else {
      incidentType = "Uncategorized";
    }

    const newIncident = await Incident.create({
      data: {
        UnitSerialNumber,
        SalesDocument,
        DocumentNumber,
        POID,
        PROID,
        IncidentType: incidentType,
        Description,
        PICBA: PICBAID,
        BAEmailDate: new Date(BAEmailDate),
        BAEmailStatus: "-",
        PICUser: PICUserID,
        UserEmailDate: new Date(UserEmailDate),
        UserEmailStatus: "-",
        OpenDate: new Date(OpenDate),
        CloseDate: null,
        FlagStatus: 0,
        Status,
      },
    });

    res.status(201).json({
      success: true,
      message: "Incident berhasil ditambahkan",
      data: newIncident,
    });
  } catch (error) {
    console.error("Error createIncident:", error);
    res.status(500).json({
      success: false,
      message: "Gagal menambahkan Incident",
      error: error,
    });
  }
};

// UPDATE Email Status (Read)
export const markEmailAsRead = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, type } = req.query;

  if (!id || !type) {
    res.status(400).send("ID dan type wajib diisi.");
    return;
  }

  try {
    const field = type === "BA" ? "BAEmailStatus" : "UserEmailStatus";

    await Incident.update({
      where: { ID: Number(id) },
      data: { [field]: "Read" },
    });

    // 🔁 Redirect ke halaman dashboard frontend
    res.redirect("http://localhost:3001");
  } catch (error) {
    console.error("Error markEmailAsRead:", error);
    res.status(500).send("Terjadi kesalahan saat menandai email.");
  }
};

export const flagIncident = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, flag } = req.body;

  try {
    const newFlag = Number(flag) === 0 ? 1 : 0;
    const message =
      newFlag === 0
        ? "Successful to Unflag Incident"
        : "Successful to Unflag Incident";

    await Incident.update({
      where: { ID: Number(id) },
      data: { FlagStatus: newFlag },
    });

    res.status(201).json({
      success: true,
      message: message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// GET All Notifications (Notifikasi berdasarkan data incident)
export const getAllNotifications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type } = req.query;

    if (!name || typeof name !== "string" || name.trim() === "") {
      res.status(400).json({
        success: false,
        message: "Parameter 'name' wajib diisi.",
      });
      return;
    }

    if (!type || typeof type !== "string" || type.trim() === "") {
      res.status(400).json({
        success: false,
        message: "Parameter 'type' wajib diisi.",
      });
      return;
    }

    const isBA = type === "BA";

    const whereCondition = {
      ...(isBA
        ? {
            NOT: { BAEmailStatus: "-" },
            pic_ba: {
              name: { contains: name.trim() },
            },
          }
        : {
            NOT: { UserEmailStatus: "-" },
            pic_user: {
              name: { contains: name.trim() },
            },
          }),
    };

    // Hitung total item
    const totalItems = await Incident.count({
      where: whereCondition,
    });

    // Ambil data incident
    const incidents = await Incident.findMany({
      where: whereCondition,
      include: {
        pic_ba: true,
        pic_user: true,
      },
      orderBy: { ID: "asc" },
      take: 100, // kamu bisa ubah jumlah ambil data sesuai kebutuhan
    });

    // Transformasi ke notifikasi
    const notifications = incidents.map((incident: any) => {
      const user = isBA ? incident.pic_ba : incident.pic_user;

      return {
        id: incident.ID,
        name: "System Reminder",
        email: user?.email || "Unknown PIC",
        emailStatus: isBA ? incident.BAEmailStatus : incident.UserEmailStatus,
        description: incident.Description,
        message: "reminded about Incident",
        target: `ID: ${incident.ID} (${incident.IncidentType || "-"})`,
        time: isBA ? incident.BAEmailDate : incident.UserEmailDate,
        company: user?.name || "Unknown PIC",
        tags: ["Reminder", incident.IncidentType, type],
        status: incident.Status,
      };
    });

    // Grouping berdasarkan tanggal
    const grouped = notifications.reduce((acc: any, notif: any) => {
      const dateKey =
        notif.time instanceof Date
          ? notif.time.toISOString().split("T")[0]
          : "Unknown Date";

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(notif);
      return acc;
    }, {} as Record<string, typeof notifications>);

    res.status(200).json({
      success: true,
      message: "Notifikasi berhasil diambil dan dikelompokkan",
      data: grouped, // objek dikelompok berdasarkan tanggal
      totalItems,
    });
  } catch (error) {
    console.error("Error getAllNotifications:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data notifikasi",
    });
  }
};
