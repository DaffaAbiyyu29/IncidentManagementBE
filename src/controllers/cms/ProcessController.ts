// src/controllers/cms/ProcessController.ts
import { Request, Response } from "express";
import { Process } from "../../models/Table/Satria/Process";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

// View all dataProcess
export const getAllProcess = async (
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
      "UnitID",
      "MasterProcessID",
      "Status",
      "PlanStartDate",
      "PlanEndDate",
      "ActualStartDate",
      "ActualEndDate",
      "IsHold",
      "HoldDate",
      "Created",
      "CreatedBy",
      "LastModified",
      "LastModifiedBy",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ID";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataProcessData = await Process.findMany({
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
        ProcessAssign: {
          include: {
            ProcessActivity: true, // Include related ProcessActivity
          },
        },
      },
    });

    const totalItems = await Process.count({
      where: {
        OR: [
          { CreatedBy: { contains: search as string } },
          { LastModifiedBy: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai model dan format tanggal
    const serializedData = dataProcessData.map((item: any) => {
      return {
        ID: Number(item.ID),
        UnitID: item.UnitID,
        MasterProcessID: item.MasterProcessID,
        Status: item.Status,
        PlanStartDate: formattedDate(item.PlanStartDate),
        PlanEndDate: formattedDate(item.PlanEndDate),
        ActualStartDate: formattedDate(item.ActualStartDate),
        ActualEndDate: formattedDate(item.ActualEndDate),
        IsHold: item.IsHold,
        HoldDate: formattedDate(item.HoldDate),
        Created: formattedDate(item.Created),
        CreatedBy: item.CreatedBy,
        LastModified: formattedDate(item.LastModified),
        LastModifiedBy: item.LastModifiedBy,
        ProcessAssign:
          item.ProcessAssign?.map((assign: any) => ({
            ...assign,
            ProcessActivity: assign.ProcessActivity ?? [],
          })) ?? [],
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Process data:", err);
    res
      .status(500)
      .json({ success: false, message: "Error mengambil data Process" });
  }
};
