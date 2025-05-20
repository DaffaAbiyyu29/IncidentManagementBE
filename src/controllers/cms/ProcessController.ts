// src/controllers/cms/ProcessController.ts
import { Request, Response } from "express";
import { Process } from "../../models/Table/Satria/Process";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";
import { Manhour } from "../../interface/Manhour";
import {
  IDataProcess,
  IDataProcessActivity,
  IDataProcessAssign,
  IDataUnit,
} from "../../interface/MHUtil";
import { IDataCount } from "../../interface/CountData";
import {
  DataUnit,
  DataProcess,
  DataProcessAssign,
  DataProcessActivity,
} from "../../models/Table/Satria/MHUtil";
import { minutesInHour } from "date-fns/constants";
import { vwUnit } from "../../models/Table/Satria/vwUnit";
import { vwProcess } from "../../models/Table/Satria/vwProcess";
import { vwProcessAssign2All } from "../../models/Table/Satria/vwProcessAssign";
import { vwProcessActivity } from "../../models/Table/Satria/vwProcessActivity";
import { Incident } from "../../models/Table/Satria/trx_LogHistory";

export const getAllDataProcessUnit = async (
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
      type = 0,
    } = req.query;

    const now = getCurrentWIBDate();

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface DataFBL5N
    const validSortFields = Object.keys(
      {} as IDataUnit // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "UnitSerialNumber"; // Fallback jika sort tidak valid

    const units = await vwUnit.findMany({
      where: {
        AND: [
          {
            UnitMPSDueDate: {
              gte: new Date(`${year}-${month}-01`),
              lt: new Date(
                `${year}-${(Number(month) + 1).toString().padStart(2, "0")}-01`
              ),
            },
          },
          {
            vwPRO: {
              Number: {
                not: undefined,
              },
            },
          },
          {
            vwProduct: {
              ProductName: {
                not: undefined,
              },
            },
          },
        ],
        OR: [
          { UnitSerialNumber: { contains: search as string } },
          { vwPRO: { Number: { contains: search as string } } },
          { vwProduct: { ProductName: { contains: search as string } } },
          {
            vwProduct: {
              vwProductGroup: {
                ProductGroupName: { contains: search as string },
              },
            },
          },
          // dst. untuk semua kolom string
        ],
      },
      include: {
        vwPRO: true,
        vwProduct: {
          include: {
            vwProductGroup: true,
          },
        },
        vwProcess: {
          select: {
            StandardMH: true,
            ProcessActualEndDate: true,
            vwProcessAssign: {
              select: {
                vwProcessActivity: true,
              },
            },
          },
        },
      },
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const incidents = await Incident.findMany({
      where: { IncidentType: "Manhour Discrepancy" },
      include: {
        pic_ba: true,
        pic_user: true,
      },
    });

    let resultData = units.filter((unitData) => {
      const matchedIncidents = incidents.filter(
        (incident) => incident.UnitSerialNumber === unitData.UnitSerialNumber
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
      resultData = units
        .map((unitData) => {
          const matchedIncidents = incidents.filter((incident) => {
            if (!incident.BAEmailDate) return false;
            if (!incident.UserEmailDate) return false;
            const baEmailDate = new Date(incident.BAEmailDate);
            const userEmailDate = new Date(incident.UserEmailDate);
            return (
              incident.UnitSerialNumber === unitData.UnitSerialNumber &&
              now >= baEmailDate
            );
          });

          return {
            ...unitData,
            incidents: matchedIncidents,
          };
        })
        .filter((item) => item.incidents.length > 0);
    } else if (Number(type) === 2) {
      resultData = units
        .map((unitData) => {
          const matchedIncidents = incidents.filter((incident) => {
            if (!incident.UserEmailDate) return false;
            const userEmailDate = new Date(incident.UserEmailDate);
            return (
              incident.UnitSerialNumber === unitData.UnitSerialNumber &&
              now >= userEmailDate
            );
          });

          return {
            ...unitData,
            incidents: matchedIncidents,
          };
        })
        .filter((item) => item.incidents.length > 0);
    }

    const totalItems = resultData.length;

    const totalPages = Math.ceil(totalItems / pageSize);

    // Konversi data sesuai dengan interface DataFBL5N
    const serializedData = resultData.map((unit) => {
      const standardMH = unit.vwProcess.reduce(
        (sum, proc) => sum + (proc.StandardMH ? proc.StandardMH.toNumber() : 0),
        0
      );

      const completedStandardMH = unit.vwProcess.reduce((sum, proc) => {
        if (proc.ProcessActualEndDate !== null) {
          return sum + (proc.StandardMH ? proc.StandardMH.toNumber() : 0);
        }
        return sum;
      }, 0);

      const progressPercent =
        standardMH === 0
          ? 0
          : Number(((completedStandardMH / standardMH) * 100).toFixed(2));

      const processCount = unit.vwProcess.length;
      const processCompleted = unit.vwProcess.filter(
        (proc) => proc.ProcessActualEndDate !== null
      ).length;

      const mhUtil =
        (Number(unit.UnitActualHoursCompleted?.toFixed(2)) /
          Number(standardMH.toFixed(2))) *
        100;
      
      const mhDiscrepancy = mhUtil - progressPercent;

      return {
        proNumber: unit.vwPRO ? unit.vwPRO.Number : null, // Tangani jika vwPRO null
        unitSerialNumber: unit.UnitSerialNumber,
        productGroupName:
          unit.vwProduct?.vwProductGroup?.ProductGroupName ?? null,
        productName: unit.vwProduct?.ProductName ?? null,
        unitPlanStartDate: unit.UnitPlanStartDate
          ? unit.UnitPlanStartDate.toISOString()
          : null,
        unitPlanEndDate: unit.UnitPlanEndDate
          ? unit.UnitPlanEndDate.toISOString()
          : null,
        unitPlanDuration: unit.UnitPlanDuration ?? null,
        unitActualStartDate: unit.UnitActualStartDate
          ? unit.UnitActualStartDate.toISOString()
          : null,
        unitActualEndDate: unit.UnitActualEndDate
          ? unit.UnitActualEndDate.toISOString()
          : null,
        unitActualDuration: unit.UnitActualDuration ?? null,
        unitDelayInDay: unit.UnitDelayInDay ?? null,
        standardMH: Number(standardMH.toFixed(2)),
        actualHours: Number(unit.UnitActualHoursCompleted?.toFixed(2)) ?? 0,
        processCount: processCount,
        processCompleted: processCompleted,
        mhUtilization: Number(mhUtil.toFixed(2)),
        mhDiscrepancy: Number(mhDiscrepancy.toFixed(2)),
        progressPercent: Number(progressPercent.toFixed(2)),
        mpsDueDate: unit.UnitMPSDueDate
          ? unit.UnitMPSDueDate.toISOString()
          : null,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Unit",
      data: {
        data: serializedData,
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

export const getDataDetailProcessUnit = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "StandardMH",
      order = "desc",
      serialNumber = "",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder = order.toString().toLowerCase() === "asc" ? "asc" : "desc";

    // Ambil daftar valid sort fields dari kunci interface DataFBL5N
    const validSortFields = Object.keys(
      {} as IDataProcess // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "StandardMH"; // Fallback jika sort tidak valid

    const unit = await vwUnit.findFirst({
      where: {
        UnitSerialNumber: serialNumber.toString(), // Cari berdasarkan serial number
      },
      select: {
        UnitID: true, // Ambil UnitID untuk digunakan di query selanjutnya
      },
    });

    const baseWhere = {
      UnitID: unit?.UnitID,
      OR: [
        { MasterProcessName: { contains: search as string } },
        { ProcessGroupName: { contains: search as string } },
      ],
    };

    // ✅ Ambil total StandardMH seluruh data (TIDAK PAGINASI)
    const totalStandardMHResult = await vwProcess.aggregate({
      where: baseWhere,
      _sum: {
        StandardMH: true,
      },
    });

    const totalStandardMH = totalStandardMHResult._sum.StandardMH ?? 0;

    // ✅ Ambil data paginasi
    const process = await vwProcess.findMany({
      where: baseWhere,
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const totalItems = await vwProcess.count({
      where: baseWhere,
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = process.map((item) => {
      const ratioPercent = totalStandardMH
        ? (Number(item.StandardMH) / Number(totalStandardMH)) * 100
        : 0;

      return {
        ProcessID: item.ProcessID,
        UnitID: item.UnitID,
        ProcessStatus: item.ProcessStatus,
        ProcessPlanStartDate: item.ProcessPlanStartDate,
        ProcessPlanEndDate: item.ProcessPlanEndDate,
        ProcessPlanDuration: item.ProcessPlanDuration,
        ProcessActualStartDate: item.ProcessActualStartDate,
        ProcessActualEndDate: item.ProcessActualEndDate,
        ProcessActualDuration: item.ProcessActualDuration,
        MasterProcessName: item.MasterProcessName,
        StandardMH: Number(item.StandardMH),
        ProcessGroupName: item.ProcessGroupName,
        ProcessDelayInDay: item.ProcessDelayInDay,
        ProcessOrder: item.ProcessOrder,
        RatioPercent: Number(ratioPercent.toFixed(2)),
        LastModified: item.LastModified,
        MasterProcessID: item.MasterProcessID,
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
    res.status(500).json({
      success: false,
      message: "Error mengambil data Process",
      detail: err,
    });
  }
};

export const getDataProcessAssign = async (
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
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface DataFBL5N
    const validSortFields = Object.keys(
      {} as IDataProcessAssign // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ProcessID"; // Fallback jika sort tidak valid

    const processAssign = await vwProcessAssign2All.findMany({
      where: {
        ProcessID: Number(processID),
        OR: [
          { LeaderName: { contains: search as string } },
          { OperatorName: { contains: search as string } },
        ],
      },
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const totalItems = await vwProcessAssign2All.count({
      where: {
        ProcessID: Number(processID),
        OR: [
          { LeaderName: { contains: search as string } },
          { OperatorName: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = processAssign.map((item) => {
      return {
        ID: item.ID,
        ProcessID: item.ProcessID,
        UnitID: item.UnitID,
        LeaderName: item.LeaderName,
        OperatorName: item.OperatorName,
        NRP: item.NRP,
        TglAssign: item.TglAssign,
        ProcessassignStatus: item.ProcessassignStatus,
        Startassign: item.Startassign,
        Stopassign: item.Stopassign,
        ProcessAssignType: item.ProcessAssignType,
        LastModified: item.LastModified,
        lastStart: item.lastStart,
        lastStop: item.lastStop,
        remark: item.remark,
        IsActive: item.IsActive,
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Assign",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Assign data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Assign",
      detail: err,
    });
  }
};

export const getDataProcessActivity = async (
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
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;
    const sortOrder =
      order.toString().toLowerCase() === "desc" ? "desc" : "asc";

    // Ambil daftar valid sort fields dari kunci interface DataFBL5N
    const validSortFields = Object.keys(
      {} as IDataProcessActivity // Gunakan assertion untuk mendapatkan keys dari interface
    );

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "ProcessActivityID"; // Fallback jika sort tidak valid

    const processActivity = await vwProcessActivity.findMany({
      where: {
        ProcessAssignID: Number(processAssignID),
        OR: [
          { EmployeeNumber: { contains: search as string } },
          { atasan: { contains: search as string } },
        ],
      },
      orderBy: {
        [sortField]: sortOrder,
      },
      skip,
      take: pageSize,
    });

    const totalItems = await vwProcessActivity.count({
      where: {
        ProcessAssignID: Number(processAssignID),
        OR: [
          { EmployeeNumber: { contains: search as string } },
          { atasan: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = processActivity.map((item) => {
      return {
        atasan: item.atasan,
        EmployeeNumber: item.EmployeeNumber,
        ActivityDateTime: item.ActivityDateTime,
        ProcessActivityID: item.ProcessActivityID,
        ProcessAssignID: item.ProcessAssignID,
        ProcessActivityName: item.ProcessActivityName,
        ProcessActivityStatus: item.ProcessActivityStatus,
        ProcessActivityReasonPause: item.ProcessActivityReasonPause,
        ActualHoursNonProductive: item.ActualHoursNonProductive,
        ProcessActivityActualHours: item.ProcessActivityActualHours,
        ProcessActivityDateTime: item.ProcessActivityDateTime,
        LastModifiedBy: item.LastModifiedBy,
        LastModified: item.LastModified,
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
      detail: err,
    });
  }
};

export const detectManhourDiscrepancy = async (): Promise<void> => {
  try {
    const currentWIB = getCurrentWIBDate(); // atau new Date();

    const units = await vwUnit.findMany({
      where: {
        vwPRO: { Number: { not: undefined } },
        vwProduct: { ProductName: { not: undefined } },
      },
      include: {
        vwPRO: true,
        vwProduct: {
          include: { vwProductGroup: true },
        },
        vwProcess: {
          select: {
            StandardMH: true,
            ProcessActualEndDate: true,
          },
        },
      },
    });

    const results: any[] = [];

    for (const unit of units) {
      const standardMH = unit.vwProcess.reduce(
        (sum, proc) => sum + (proc.StandardMH ? proc.StandardMH.toNumber() : 0),
        0
      );

      const completedStandardMH = unit.vwProcess.reduce((sum, proc) => {
        if (proc.ProcessActualEndDate !== null) {
          return sum + (proc.StandardMH ? proc.StandardMH.toNumber() : 0);
        }
        return sum;
      }, 0);

      const progressPercent =
        standardMH === 0
          ? 0
          : Number(((completedStandardMH / standardMH) * 100).toFixed(2));

      const mhUtil =
        standardMH === 0
          ? 0
          : (Number(unit.UnitActualHoursCompleted ?? 0) / standardMH) * 100;

      const mhDiscrepancy = Number((mhUtil - progressPercent).toFixed(2));

      // Hanya proses jika discrepancy > 0
      if (mhDiscrepancy <= 0) continue;

      const referenceNumber = unit.vwPRO?.Number ?? unit.UnitSerialNumber;
      if (!referenceNumber) continue;

      const descriptionText = `Auto-created from Unit Serial: ${unit.UnitSerialNumber} | MH Discrepancy: ${mhDiscrepancy}%`;

      const existingIncident = await Incident.findFirst({
        where: {
          UnitSerialNumber: unit.UnitSerialNumber,
          IncidentType: "Manhour Discrepancy",
        },
      });

      if (existingIncident) {
        // Ambil discrepancy lama dari Description (pakai regex untuk aman)
        const match = existingIncident.Description?.match(
          /MH Discrepancy: (-?\d+(\.\d+)?)%/
        );
        const prevDiscrepancy = match ? Number(match[1]) : null;

        // Cek apakah discrepancy sama
        const isSameDiscrepancy = prevDiscrepancy === mhDiscrepancy;

        // Kalau sama, skip update
        if (isSameDiscrepancy) continue;

        // let userEmailDate = new Date(currentWIB);
        // userEmailDate.setDate(userEmailDate.getDate() + 1);

        const updateData: any = {
          Description: descriptionText,
        };

        if (mhDiscrepancy > 10) {
          updateData.UserEmailDate = currentWIB;
        }

        await Incident.update({
          where: { ID: existingIncident.ID },
          data: updateData,
        });

        // console.log(
        //   `[${new Date().toLocaleString()}] Incident EXISTING (Unit Serial ${unit.UnitSerialNumber}) diupdate. MH Discrepancy berubah menjadi: ${mhDiscrepancy}%`
        // );

        results.push({ ...existingIncident, updated: true });
        continue;
      }

      let baEmailDate = new Date(currentWIB);
      baEmailDate.setDate(currentWIB.getDate() + 1);

      // Kalau belum ada, create incident baru
      const newIncident = await Incident.create({
        data: {
          UnitSerialNumber: unit.UnitSerialNumber,
          IncidentType: "Manhour Discrepancy",
          Description: descriptionText,
          PICBA: 1,
          BAEmailDate: baEmailDate,
          BAEmailStatus: "-",
          PICUser: 11,
          UserEmailDate: mhDiscrepancy > 10 ? currentWIB : null,
          UserEmailStatus: "-",
          OpenDate: currentWIB,
          CloseDate: null,
          Status: "-",
        },
      });

      console.log(
        `[${new Date().toLocaleString()}] Incident NEW dibuat untuk Unit Serial ${
          unit.UnitSerialNumber
        }. MH Discrepancy: ${mhDiscrepancy}%`
      );

      results.push(newIncident);
    }
  } catch (error) {
    console.error(
      "Error mendeteksi dan memproses incident manhour discrepancy:",
      error
    );
  }
};
