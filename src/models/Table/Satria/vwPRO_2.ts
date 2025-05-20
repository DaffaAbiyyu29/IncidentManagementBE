// src/models/Table/Satria/vwPRO_2.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwPRO_2
export const vwPRO_2 = {
  // Mendapatkan vwPRO_2 berdasarkan ID
  findUnique: prisma.vwPRO_2.findUnique,

  // Mendapatkan semua vwPRO_2
  findMany: prisma.vwPRO_2.findMany,

  // Membuat vwPRO_2 baru
  create: prisma.vwPRO_2.create,

  // Memperbarui vwPRO_2
  update: prisma.vwPRO_2.update,

  // Menghapus vwPRO_2
  delete: prisma.vwPRO_2.delete,

  // Fungsi lain yang terkait dengan model vwPRO_2
  count: prisma.vwPRO_2.count,
  findFirst: prisma.vwPRO_2.findFirst,
  upsert: prisma.vwPRO_2.upsert,
};
