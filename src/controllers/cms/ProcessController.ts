// src/controllers/cms/ProcessController.ts
import { Request, Response } from "express";
import { Process } from "../../models/Table/Satria/Process";
import { vwProcess } from "../../models/Table/Satria/vwProcess";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Manhour } from "../../interface/Manhour"; // Import interface

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

export const getAllProcessMH = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "ProcessID",
      order = "asc",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const dataManhour: Manhour[] = await vwProcess.findMany();

    if (!Array.isArray(dataManhour) || dataManhour.length === 0) {
      throw new Error("Invalid or empty data from database");
    }

    // Pastikan field sorting valid, jika tidak gunakan default "ProcessID"
    const validSortFields: string[] = Object.keys(dataManhour[0] || {});
    const sortField = validSortFields.includes(sort) ? sort : "ProcessID";

    // Filter pencarian manual
    const filteredData = dataManhour.filter((item) => {
      const searchableFields = [
        item.ProcessID?.toString(),
        item.ProcessGroupName,
        item.MasterProcessName,
        item.ProcessStatus,
        item.StatusAssign,
        item.TypeAssign,
        item.StatusActivity,
      ];

      return searchableFields.some((field) =>
        (field ?? "").toString().toLowerCase().includes(search.toLowerCase())
      );
    });

    // Sorting data
    const sortedData = filteredData.sort((a, b) => {
      let valA = a[sortField as keyof Manhour];
      let valB = b[sortField as keyof Manhour];

      if (valA == null) return sortOrder * -1;
      if (valB == null) return sortOrder * 1;

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder * (valA - valB);
      }

      if (sortField.includes("Date") && typeof valA === "string") {
        return (
          sortOrder *
          (new Date(valA).getTime() - new Date(valB as string).getTime())
        );
      }

      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder * valA.localeCompare(valB);
      }

      return 0;
    });

    // Pagination & Hitung ManHour + PercentageUsage
    const paginatedData = sortedData
      .slice(skip, skip + pageSize)
      .map((item) => {
        const parseNumber = (value: string | number | null): number => {
          if (typeof value === "string") {
            return parseFloat(value.replace(",", "."));
          }
          return value ?? 0;
        };

        const standardMH = parseNumber(item.StandardMH);
        const actualHours = parseNumber(item.ActualHours);

        const manhour = standardMH > 0 ? actualHours / standardMH : 0;

        // Hitung PercentageUsage dengan aman (hindari division by zero)
        const percentageUsage =
          standardMH > 0 ? (actualHours / standardMH) * 100 : 0;

        return {
          ...item,
          StandardMH:
            standardMH > 0 ? String(standardMH).replace(".", ",") : "0",
          ActualHours:
            actualHours > 0 ? String(actualHours).replace(".", ",") : "0",
          ManHour: String(manhour.toFixed(2)).replace(".", ","),
          PercentageUsage:
            String(percentageUsage.toFixed(2)).replace(".", ",") + " %",
        };
      });

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process",
      data: {
        data: paginatedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Process data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process",
    });
  }
};
