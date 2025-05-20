// src/models/Table/Satria/Process.ts

import {
  PrismaClient as SatriaClient,
  vwUnit,
} from "../../../../prisma/generated/satria-client-patriapowerapps";
import { IDataUnit } from "../../../interface/MHUtil";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Process: Fungsi untuk mengambil data dari query raw
export const DataUnit = {
  findMany: async (month: number, year: number): Promise<IDataUnit[]> => {
    const startDate = new Date(`${year}-${String(month).padStart(2, "0")}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const units = await prisma.vwUnit.findMany({
      where: {
        UnitMPSDueDate: {
          gte: startDate,
          lt: endDate,
        },
      },
      include: {
        vwPRO: true,
        vwProduct: {
          include: {
            vwProductGroup: true,
          },
        },
        vwProcess: true,
      },
    });

    const result = units.map((unit) => {
      const processList = unit.vwProcess ?? [];
      const processCount = processList.length;
      const processCompleted = processList.filter(
        (proc) => proc.ProcessActualEndDate !== null
      ).length;
      const standardMH = processList.reduce(
        (sum, proc) => sum + (proc.StandardMH ? proc.StandardMH.toNumber() : 0),
        0
      );

      return {
        proNumber: unit.vwPRO?.Number ?? null,
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
        unitPlanDuration: unit.UnitPlanDuration,
        unitActualStartDate: unit.UnitActualStartDate
          ? unit.UnitActualStartDate.toISOString()
          : null,
        unitActualEndDate: unit.UnitActualEndDate
          ? unit.UnitActualEndDate.toISOString()
          : null,
        unitActualDuration: unit.UnitActualDuration,
        unitDelayInDay: unit.UnitDelayInDay,
        standardMH: standardMH,
        actualHours: unit.UnitActualHoursCompleted
          ? unit.UnitActualHoursCompleted.toNumber() // Convert Decimal to number
          : 0,
        processCount: processCount,
        processCompleted: processCompleted,
        mpsDueDate: unit.UnitMPSDueDate
          ? unit.UnitMPSDueDate.toISOString()
          : null,
        progressPercent:
          processCount > 0
            ? Math.round((processCompleted / processCount) * 100)
            : 0,
      };
    });

    return result;
  },
};

export const DataUnitCountByYear = {
  findMany: async (year: number): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT
        MONTH(vu.UnitMPSDueDate) AS month,
        COUNT(DISTINCT vu.UnitSerialNumber) AS count
      FROM vwUnit vu
      JOIN vwProcess vp ON vp.UnitID = vu.UnitID
      JOIN vwProcessAssign2All vpas ON vpas.ProcessID = vp.ProcessID AND vpas.UnitID = vu.UnitID
      JOIN vwProcessActivity vpac ON vpac.ProcessAssignID = vpas.ID
      JOIN vwPRO_2 vpro ON vpro.ID = vu.PROID
      JOIN vwProduct vprd ON vprd.ProductID = vu.ProductID
      JOIN vwProductGroup vprdg ON vprdg.ProductGroupID = vprd.ProductGroupID
      WHERE YEAR(vu.UnitMPSDueDate) = ${year} -- Menggunakan parameter tahun
      GROUP BY YEAR(vu.UnitMPSDueDate), MONTH(vu.UnitMPSDueDate)
      ORDER BY YEAR(vu.UnitMPSDueDate), MONTH(vu.UnitMPSDueDate);
    `;
  },
};

export const DataProcess = {
  findMany: async (serialNumber: string): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT *, CAST((StandardMH / SUM(StandardMH) OVER ()) * 100 AS DECIMAL(10, 2))   AS RatioPercent
      FROM vwProcess 
      WHERE UnitID = (SELECT UnitID FROM vwUnit WHERE UnitSerialNumber = ${serialNumber})
    `;
  },
};

export const DataProcessAssign = {
  findMany: async (ProcessID: Number): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT * FROM vwProcessAssign2All WHERE ProcessID = ${ProcessID}
    `;
  },
};

export const DataProcessActivity = {
  findMany: async (ProcessAssignID: Number): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT * FROM vwProcessActivity WHERE ProcessAssignID = ${ProcessAssignID}
    `;
  },
};
