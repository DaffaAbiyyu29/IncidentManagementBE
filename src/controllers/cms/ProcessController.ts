// src/controllers/cms/ProcessController.ts
import { Request, Response } from "express";
import { Process } from "../../models/Table/Satria/Process";
import { vwProcess } from "../../models/Table/Satria/vwProcess";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Manhour } from "../../interface/Manhour";
import {
  DataUnit,
  DataProcess,
  DataProcessAssign,
  DataProcessActivity,
} from "../../models/Table/Satria/MHUtil";

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
          ProcessPlanStartDate: formattedDate(item.ProcessPlanStartDate),
          ProcessPlanEndDate: formattedDate(item.ProcessPlanEndDate),
          ProcessActualStartDate: formattedDate(item.ProcessActualStartDate),
          ProcessActualEndDate: formattedDate(item.ProcessActualEndDate),
          TglAssign: formattedDate(item.TglAssign),
          ActivityDateTime: formattedDate(item.ActivityDateTime),
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
      detail: err,
    });
  }
};

export const getAllDataUnitMH = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "UnitID",
      order = "asc",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const Unit = await DataUnit.findMany();

    if (!Array.isArray(Unit) || Unit.length === 0) {
      throw new Error("Invalid or empty data from database");
    }

    // Mengambil data process, assign, dan activity untuk setiap UnitID
    const enrichedData = await Promise.all(
      Unit.map(async (unit) => {
        const processData = await DataProcess.findMany(unit.UnitID);
        const processWithAssign = await Promise.all(
          processData.map(async (process) => {
            const assignData = await DataProcessAssign.findMany(
              process.ProcessID
            );
            const assignWithActivity = await Promise.all(
              assignData.map(async (assign) => {
                const activityData = await DataProcessActivity.findMany(
                  assign.ID
                );
                return {
                  ...assign,
                  ActivityData: activityData,
                };
              })
            );
            return {
              ...process,
              AssignData: assignWithActivity,
            };
          })
        );
        return {
          ...unit,
          ProcessData: processWithAssign,
        };
      })
    );

    // Pastikan field sorting valid, jika tidak gunakan default "ProcessID"
    const validSortFields = Object.keys(enrichedData[0] || {});
    const sortField = validSortFields.includes(sort) ? sort : "ProcessID";

    // Filter pencarian manual
    const filteredData = enrichedData.filter((item) => {
      const searchableFields = [
        item.UnitID,
        item.UnitSerialNumber,
        item.ProcessCount?.toString(),
        item.StandardMH?.toString(),
        item.ActualHours?.toString(),
      ];

      return searchableFields.some((field) =>
        (field ?? "").toString().toLowerCase().includes(search.toLowerCase())
      );
    });

    // Sorting data
    const sortedData = filteredData.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

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

    // Pagination & Hitung Unit + PercentageUsage
    const paginatedData = sortedData.slice(skip, skip + pageSize);
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process, Unit, Assign, dan Activity",
      data: {
        data: paginatedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error(
      "Error fetching Process, Unit, Assign, and Activity data:",
      err
    );
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process, Unit, Assign, dan Activity",
      detail: err,
    });
  }
};

export const getAllDataUnitMHProcess = async (
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
      unitID = "",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const Process = await DataProcess.findMany(Number(unitID));

    if (!Array.isArray(Process) || Process.length === 0) {
      throw new Error("Invalid or empty data from database");
    }

    // Pastikan field sorting valid, jika tidak gunakan default "ProcessID"
    const validSortFields = Object.keys(Process[0] || {});
    const sortField = validSortFields.includes(sort) ? sort : "ProcessID";

    // Filter pencarian manual
    const filteredData = Process.filter((item) => {
      const searchableFields = [
        item.ProcessID?.toString(),
        item.ProcessGroupName,
        item.MasterProcessName,
        item.ProcessStatus,
        item.StatusAssign,
        item.TypeAssign,
        item.StatusActivity,
        item.StandardMH?.toString(),
      ];

      return searchableFields.some((field) =>
        (field ?? "").toString().toLowerCase().includes(search.toLowerCase())
      );
    });

    // Sorting data
    const sortedData = filteredData.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

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

    // Pagination & Hitung Unit + PercentageUsage
    const paginatedData = sortedData.slice(skip, skip + pageSize);
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process, Unit, Assign, dan Activity",
      data: {
        data: paginatedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error(
      "Error fetching Process, Unit, Assign, and Activity data:",
      err
    );
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process, Unit, Assign, dan Activity",
      detail: err,
    });
  }
};

export const getAllDataUnitMHProcessAssign = async (
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
      processID = "",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const Process = await DataProcessAssign.findMany(Number(processID));

    if (!Array.isArray(Process) || Process.length === 0) {
      throw new Error("Invalid or empty data from database");
    }

    // Pastikan field sorting valid, jika tidak gunakan default "ProcessID"
    const validSortFields = Object.keys(Process[0] || {});
    const sortField = validSortFields.includes(sort) ? sort : "ProcessAssignID";

    // Filter pencarian manual
    const filteredData = Process.filter((item) => {
      const searchableFields = [
        item.ID?.toString(),
        item.IsActive?.toString(),
        item.LastModified,
        item.LeaderName,
        item.NRP,
        item.OperatorName,
        item.ProcessAssignType,
        item.ProcessID?.toString(),
        item.ProcessassignStatus,
        item.Startassign,
        item.Stopassign,
        item.TglAssign,
        item.UnitID?.toString(),
        item.lastStart,
        item.lastStop,
        item.remark,
      ];

      return searchableFields.some((field) =>
        (field ?? "").toString().toLowerCase().includes(search.toLowerCase())
      );
    });

    // Sorting data
    const sortedData = filteredData.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

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

    // Pagination & Hitung Unit + PercentageUsage
    const paginatedData = sortedData.slice(skip, skip + pageSize);
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process, Unit, Assign, dan Activity",
      data: {
        data: paginatedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error(
      "Error fetching Process, Unit, Assign, and Activity data:",
      err
    );
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process, Unit, Assign, dan Activity",
      detail: err,
    });
  }
};

export const getAllDataUnitMHProcessActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "ProcessActivityID",
      order = "asc",
      processAssignID = "",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const Process = await DataProcessActivity.findMany(Number(processAssignID));

    if (!Array.isArray(Process) || Process.length === 0) {
      throw new Error("Invalid or empty data from database");
    }

    const validSortFields = Object.keys(Process[0] || {});
    const sortField = validSortFields.includes(sort)
      ? sort
      : "ProcessActivityID";

    const filteredData = Process.filter((item) => {
      const searchableFields = [
        item.atasan,
        item.EmployeeNumber?.toString(),
        item.ActivityDateTime?.toString(),
        item.ProcessActivityID?.toString(),
        item.ProcessAssignID?.toString(),
        item.ProcessActivityName,
        item.ProcessActivityStatus,
        item.ProcessActivityReasonPause,
        item.ActualHoursNonProductive?.toString(),
        item.ProcessActivityActualHours?.toString(),
        item.ProcessActivityDateTime?.toString(),
        item.LastModifiedBy,
        item.LastModified?.toString(),
      ];

      return searchableFields.some((field) =>
        (field ?? "").toString().toLowerCase().includes(search.toLowerCase())
      );
    });

    const sortedData = filteredData.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

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

    const paginatedData = sortedData.slice(skip, skip + pageSize);
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Process Activity",
      data: {
        data: paginatedData,
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
      detail: err,
    });
  }
};
