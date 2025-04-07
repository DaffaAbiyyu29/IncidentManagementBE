// src/models/Table/Satria/Process.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Process: Fungsi untuk mengambil data dari query raw
export const DataUnit = {
  findMany: async (month: number, year: number): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT
        vpro.Number AS PRO_Number,
        vu.UnitSerialNumber AS Unit_Serial_Number,
        vprdg.ProductGroupName AS Product_Group_Name,
        vprd.ProductName AS Product_Name,
          (SELECT COUNT(*) FROM vwProcess WHERE UnitID = vu.UnitID) AS Process_Count, 
          (SELECT SUM(StandardMH) FROM vwProcess WHERE UnitID = vu.UnitID) AS Standard_MH, 
          (SELECT SUM(ProcessActivityActualHours) 
          FROM vwProcessActivity vpac
          JOIN vwProcessAssign2All vpas ON vpac.ProcessAssignID = vpas.ID
          WHERE vpas.UnitID = vu.UnitID) AS Actual_Hours,
        vu.UnitMPSDueDate AS MPS_Due_Date
        FROM vwUnit vu
        JOIN vwProcess vp ON vp.UnitID = vu.UnitID
        JOIN vwProcessAssign2All vpas ON vpas.ProcessID = vp.ProcessID AND vpas.UnitID = vu.UnitID
        JOIN vwProcessActivity vpac ON vpac.ProcessAssignID = vpas.ID
        JOIN vwPRO_2 vpro ON vpro.ID = vu.PROID
        JOIN vwProduct vprd ON vprd.ProductID= vu.ProductID
        JOIN vwProductGroup vprdg ON vprdg.ProductGroupID = vprd.ProductGroupID
        WHERE MONTH(vu.UnitMPSDueDate) = ${month}
        AND YEAR(vu.UnitMPSDueDate) = ${year}
    `;
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
      SELECT * 
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
