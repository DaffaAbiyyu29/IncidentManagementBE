// src/models/Table/Satria/ALL_PO.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-datawarehouse";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model ALL_PO
export const AllPo = {
  // Mendapatkan aLL_PO berdasarkan ID
  findUnique: prisma.aLL_PO.findUnique,

  // Mendapatkan semua aLL_PO
  findMany: prisma.aLL_PO.findMany,

  // Membuat aLL_PO baru
  create: prisma.aLL_PO.create,

  // Memperbarui aLL_PO
  update: prisma.aLL_PO.update,

  // Menghapus aLL_PO
  delete: prisma.aLL_PO.delete,

  // Fungsi lain yang terkait dengan model aLL_PO
  count: prisma.aLL_PO.count,
  findFirst: prisma.aLL_PO.findFirst,
  upsert: prisma.aLL_PO.upsert,
};
