// src/models/Table/Satria/vwProcessActivity.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwProcessActivity
export const vwProcessActivity = {
  // Mendapatkan vwProcessActivity berdasarkan ID
  findUnique: prisma.vwProcessActivity.findUnique,

  // Mendapatkan semua vwProcessActivity
  findMany: prisma.vwProcessActivity.findMany,

  // Membuat vwProcessActivity baru
  create: prisma.vwProcessActivity.create,

  // Memperbarui vwProcessActivity
  update: prisma.vwProcessActivity.update,

  // Menghapus vwProcessActivity
  delete: prisma.vwProcessActivity.delete,

  // Fungsi lain yang terkait dengan model vwProcessActivity
  count: prisma.vwProcessActivity.count,
  findFirst: prisma.vwProcessActivity.findFirst,
  upsert: prisma.vwProcessActivity.upsert,
};
