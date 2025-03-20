// src/models/Table/Satria/ProcessAssign.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model ProcessAssign
export const ProcessAssign = {
  // Mendapatkan processAssign berdasarkan ID
  findUnique: prisma.processAssign.findUnique,

  // Mendapatkan semua processAssign
  findMany: prisma.processAssign.findMany,

  // Membuat processAssign baru
  create: prisma.processAssign.create,

  // Memperbarui processAssign
  update: prisma.processAssign.update,

  // Menghapus processAssign
  delete: prisma.processAssign.delete,

  // Fungsi lain yang terkait dengan model processAssign
  count: prisma.processAssign.count,
  findFirst: prisma.processAssign.findFirst,
  upsert: prisma.processAssign.upsert,
};
