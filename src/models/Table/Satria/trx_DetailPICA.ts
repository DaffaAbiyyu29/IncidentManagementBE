// src/models/Table/Satria/PICA.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model DetailPICA
export const DetailPICA = {
  // Mendapatkan trx_DetailPICA berdasarkan ID
  findUnique: prisma.trx_DetailPICA.findUnique,

  // Mendapatkan semua trx_DetailPICA
  findMany: prisma.trx_DetailPICA.findMany,

  // Membuat trx_DetailPICA baru
  create: prisma.trx_DetailPICA.create,

  // Membuat trx_DetailPICA baru
  createMany: prisma.trx_DetailPICA.createMany,

  // Memperbarui trx_DetailPICA
  update: prisma.trx_DetailPICA.update,

  // Menghapus trx_DetailPICA
  delete: prisma.trx_DetailPICA.delete,

  // Fungsi lain yang terkait dengan model trx_DetailPICA
  count: prisma.trx_DetailPICA.count,
  findFirst: prisma.trx_DetailPICA.findFirst,
  upsert: prisma.trx_DetailPICA.upsert,
};
