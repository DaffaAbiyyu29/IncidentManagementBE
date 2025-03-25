// src/models/Table/Satria/Process.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Process: Fungsi untuk mengambil data dari query raw
export const DataUnit = {
  findMany: async (): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT
        vu.UnitID,
        vu.UnitSerialNumber,
          (SELECT COUNT(*) FROM vwProcess WHERE UnitID = vu.UnitID) AS ProcessCount, 
          (SELECT SUM(StandardMH) FROM vwProcess WHERE UnitID = vu.UnitID) AS StandardMH, 
          (SELECT SUM(ProcessActivityActualHours) 
          FROM vwProcessActivity vpac
          JOIN vwProcessAssign2All vpas ON vpac.ProcessAssignID = vpas.ID
          WHERE vpas.UnitID = vu.UnitID) AS ActualHours
      FROM vwUnit vu
      JOIN vwProcess vp ON vp.UnitID = vu.UnitID
      JOIN vwProcessAssign2All vpas ON vp.ProcessID = vpas.ProcessID AND vu.UnitID = vpas.UnitID
      JOIN vwProcessActivity vpac ON vpas.ID = vpac.ProcessAssignID
    `;
  },
};

export const DataProcess = {
  findMany: async (UnitID: Number): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT * FROM vwProcess WHERE UnitID = ${UnitID}
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
