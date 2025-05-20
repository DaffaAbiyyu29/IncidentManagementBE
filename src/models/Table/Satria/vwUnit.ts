// src/models/Table/Satria/vwUnit.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwUnit
export const vwUnit = {
  // Mendapatkan vwUnit berdasarkan ID
  findUnique: prisma.vwUnit.findUnique,

  // Mendapatkan semua vwUnit
  findMany: prisma.vwUnit.findMany,

  // Membuat vwUnit baru
  create: prisma.vwUnit.create,

  // Memperbarui vwUnit
  update: prisma.vwUnit.update,

  // Menghapus vwUnit
  delete: prisma.vwUnit.delete,

  // Fungsi lain yang terkait dengan model vwUnit
  count: prisma.vwUnit.count,
  findFirst: prisma.vwUnit.findFirst,
  upsert: prisma.vwUnit.upsert,
};
