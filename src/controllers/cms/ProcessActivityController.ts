// src/controllers/cms/ProcessActivityController.ts
import { Request, Response } from "express";
import { ProcessActivity } from "../../models/Table/Satria/ProcessActivity";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

// View all dataProcessActivity
export const getAllProcessActivity = async (
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
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const validSortFields = [
      "ID",
      "ProcessAssignID",
      "Status",
      "ReasonPauseID",
      "ActivityDateTime",
      "ActualHours",
      "Created",
      "CreatedBy",
      "LastModified",
      "LastModifiedBy",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ID";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataProcessActivityData = await ProcessActivity.findMany({
      where: {
        OR: [
          { CreatedBy: { contains: search as string } },
          { LastModifiedBy: { contains: search as string } },
        ],
      },
      orderBy: { [sortField]: sortOrder },
      skip,
      take: pageSize,
      include: {
        ProcessAssign: true, // Include relation if needed
      },
    });

    const totalItems = await ProcessActivity.count({
      where: {
        OR: [
          { CreatedBy: { contains: search as string } },
          { LastModifiedBy: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai model dan format tanggal
    const serializedData = dataProcessActivityData.map((item: any) => {
      return {
        ID: Number(item.ID),
        ProcessAssignID: item.ProcessAssignID,
        Status: item.Status,
        ReasonPauseID: item.ReasonPauseID ?? null,
        ActivityDateTime: formattedDate(item.ActivityDateTime),
        ActualHours: item.ActualHours ?? null,
        Created: formattedDate(item.Created),
        CreatedBy: item.CreatedBy,
        LastModified: formattedDate(item.LastModified),
        LastModifiedBy: item.LastModifiedBy,
        ProcessAssign: item.ProcessAssign ?? null,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process Activity",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Process Activity data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process Activity",
    });
  }
};
