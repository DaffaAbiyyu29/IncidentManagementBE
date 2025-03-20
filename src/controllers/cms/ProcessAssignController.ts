// src/controllers/cms/ProcessAssignController.ts
import { Request, Response } from "express";
import { ProcessAssign } from "../../models/Table/Satria/ProcessAssign";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

// View all dataProcessAssign
export const getAllProcessAssign = async (
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
      "ProcessID",
      "UserID",
      "EmployeeNumber",
      "Status",
      "Type",
      "Created",
      "CreatedBy",
      "LastModified",
      "LastModifiedBy",
      "remark",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ID";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataProcessAssignData = await ProcessAssign.findMany({
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
        ProcessActivity: true, // Include related ProcessActivity
        Process: true, // Include related Process
      },
    });

    const totalItems = await ProcessAssign.count({
      where: {
        OR: [
          { CreatedBy: { contains: search as string } },
          { LastModifiedBy: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai model dan format tanggal
    const serializedData = dataProcessAssignData.map((item: any) => {
      return {
        ID: Number(item.ID),
        ProcessID: item.ProcessID,
        UserID: item.UserID,
        EmployeeNumber: item.EmployeeNumber ?? null,
        Status: item.Status,
        Type: item.Type ?? null,
        Created: formattedDate(item.Created),
        CreatedBy: item.CreatedBy,
        LastModified: formattedDate(item.LastModified),
        LastModifiedBy: item.LastModifiedBy,
        remark: item.remark ?? null,
        ProcessActivity: item.ProcessActivity ?? [],
        Process: item.Process ?? null,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process Assign",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Process Assign data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process Assign",
    });
  }
};
