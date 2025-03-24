// src/models/Table/Satria/Process.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Process: Fungsi untuk mengambil data dari query raw
export const vwProcess = {
  findMany: async (): Promise<any[]> => {
    return prisma.$queryRaw<any[]>`
      SELECT DISTINCT
        vp.ProcessID,
        pa.ID AS ProcessAssignID,
        pac.ID AS ProcessActivityID,
        vp.ProcessGroupName,
        vp.MasterProcessName,
        vp.ProcessOrder,
        vp.ProcessStatus,
        vp.ProcessPlanStartDate,
        vp.ProcessPlanEndDate,
        vp.ProcessPlanDuration,
        vp.ProcessActualStartDate,
        vp.ProcessActualEndDate,
        vp.ProcessActualDuration,
        vp.ProcessDelayInDay,
        CAST(vp.StandardMH AS DECIMAL(18,4)) AS StandardMH,
        pa.Status AS StatusAssign,
        pa.Type AS TypeAssign,
        pac.Status AS StatusActivity,
        pac.ActivityDateTime,
        CAST(pac.ActualHours AS DECIMAL(18,4)) AS ActualHours
      FROM vwProcess vp
      INNER JOIN ProcessAssign pa ON vp.ProcessID = pa.ProcessID
      INNER JOIN ProcessActivity pac ON pa.ID = pac.ProcessAssignID
    `;
  },
};
