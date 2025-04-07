// src/controllers/cms/ProcessController.ts
import { Request, Response } from "express";
import { Process } from "../../models/Table/Satria/Process";
import { vwProcess } from "../../models/Table/Satria/vwProcess";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Manhour } from "../../interface/Manhour";
import { IDataUnit } from "../../interface/MHUtil";
import { IDataCount } from "../../interface/CountData";
import {
  DataUnit,
  DataUnitCountByYear,
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
      sort = "mpsDueDate",
      month = String(new Date().getMonth() + 1).padStart(2, "0"),
      year = String(new Date().getFullYear()),
      order = "asc",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    // Ambil data dari database
    const Unit = await DataUnit.findMany(Number(month), Number(year));

    // Jika data kosong, return response tanpa error
    if (!Array.isArray(Unit) || Unit.length === 0) {
      res.status(200).json({
        success: true,
        message: "Data unit tidak ditemukan",
        data: {
          data: [],
          totalPages: 0,
          currentPage: pageNumber,
          totalItems: 0,
        },
      });
      return;
    }

    // Ambil valid sort fields dari interface IDataUnit
    const validSortFields = Object.keys({} as IDataUnit);
    const sortField = validSortFields.includes(sort)
      ? sort
      : "unitSerialNumber";

    // Filter pencarian manual
    const filteredData = Unit.filter((item) => {
      return Object.values(item)
        .map((value) => (value ?? "").toString().toLowerCase())
        .some((field) => field.includes(search.toLowerCase()));
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

    // Format data sesuai interface IDataUnit
    const formattedData: IDataUnit[] = sortedData
      .slice(skip, skip + pageSize)
      .map((item) => ({
        proNumber: item.PRO_Number, // Sesuaikan dengan alias di query SQL
        unitSerialNumber: item.Unit_Serial_Number,
        productGroupName: item.Product_Group_Name,
        productName: item.Product_Name,
        processCount: item.Process_Count ?? 0,
        standardMH: item.Standard_MH ?? 0,
        actualHours: item.Actual_Hours ?? 0,
        mpsDueDate: item.MPS_Due_Date ?? null,
      }));

    // Hitung total item dan halaman
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Unit",
      data: {
        data: formattedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Unit data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Unit",
      detail: err,
    });
  }
};

export const getAllDataUnitMHCountByYear = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { year = String(new Date().getFullYear()) } = req.query;

    // Ambil data dari database (sesuaikan dengan ORM/query builder Anda)
    const Unit: IDataCount[] = await DataUnitCountByYear.findMany(Number(year));

    // Format data sesuai interface IDataCount (no need for map if already formatted)
    const monthlyCounts = Unit;

    // Hitung total item dan halaman
    const totalCount = Unit.reduce((acc, item) => acc + item.count, 0);

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Unit",
      data: {
        data: monthlyCounts,
        totalCount,
      },
    });
  } catch (err) {
    console.error("Error fetching Unit data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Unit",
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
      serialNumber = "",
    } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toLowerCase() === "desc" ? -1 : 1;

    const Process = await DataProcess.findMany(serialNumber);

    if (!Array.isArray(Process) || Process.length === 0) {
      res.status(200).json({
        success: true,
        message: "Data process unit tidak ditemukan",
        data: {
          data: [],
          totalPages: 0,
          currentPage: pageNumber,
          totalItems: 0,
        },
      });
      return;
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
      res.status(200).json({
        success: true,
        message: "Data process assign tidak ditemukan",
        data: {
          data: [],
          totalPages: 0,
          currentPage: pageNumber,
          totalItems: 0,
        },
      });
      return;
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
      res.status(200).json({
        success: true,
        message: "Data process activity tidak ditemukan",
        data: {
          data: [],
          totalPages: 0,
          currentPage: pageNumber,
          totalItems: 0,
        },
      });
      return;
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
