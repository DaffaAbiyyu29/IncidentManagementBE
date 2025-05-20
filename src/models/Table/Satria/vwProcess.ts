// src/models/Table/Satria/vwProcess.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwProcess
export const vwProcess = {
  // Mendapatkan vwProcess berdasarkan ID
  findUnique: prisma.vwProcess.findUnique,

  // Mendapatkan semua vwProcess
  findMany: prisma.vwProcess.findMany,

  // Membuat vwProcess baru
  create: prisma.vwProcess.create,

  // Memperbarui vwProcess
  update: prisma.vwProcess.update,

  // Menghapus vwProcess
  delete: prisma.vwProcess.delete,

  // Fungsi lain yang terkait dengan model vwProcess
  count: prisma.vwProcess.count,
  findFirst: prisma.vwProcess.findFirst,
  upsert: prisma.vwProcess.upsert,
  aggregate: prisma.vwProcess.aggregate,
};
