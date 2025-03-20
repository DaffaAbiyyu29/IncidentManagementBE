// src/models/Table/Satria/ProcessActivity.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model ProcessActivity
export const ProcessActivity = {
  // Mendapatkan processActivity berdasarkan ID
  findUnique: prisma.processActivity.findUnique,

  // Mendapatkan semua processActivity
  findMany: prisma.processActivity.findMany,

  // Membuat processActivity baru
  create: prisma.processActivity.create,

  // Memperbarui processActivity
  update: prisma.processActivity.update,

  // Menghapus processActivity
  delete: prisma.processActivity.delete,

  // Fungsi lain yang terkait dengan model processActivity
  count: prisma.processActivity.count,
  findFirst: prisma.processActivity.findFirst,
  upsert: prisma.processActivity.upsert,
};
