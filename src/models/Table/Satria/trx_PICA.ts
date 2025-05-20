// src/models/Table/Satria/PICA.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model PICA
export const PICA = {
  // Mendapatkan trx_PICA berdasarkan ID
  findUnique: prisma.trx_PICA.findUnique,

  // Mendapatkan semua trx_PICA
  findMany: prisma.trx_PICA.findMany,

  // Membuat trx_PICA baru
  create: prisma.trx_PICA.create,

  // Memperbarui trx_PICA
  update: prisma.trx_PICA.update,

  // Menghapus trx_PICA
  delete: prisma.trx_PICA.delete,

  // Fungsi lain yang terkait dengan model trx_PICA
  count: prisma.trx_PICA.count,
  findFirst: prisma.trx_PICA.findFirst,
  upsert: prisma.trx_PICA.upsert,
};
