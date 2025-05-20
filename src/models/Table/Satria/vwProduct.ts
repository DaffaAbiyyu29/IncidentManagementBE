// src/models/Table/Satria/vwProduct.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwProduct
export const vwProduct = {
  // Mendapatkan vwProduct berdasarkan ID
  findUnique: prisma.vwProduct.findUnique,

  // Mendapatkan semua vwProduct
  findMany: prisma.vwProduct.findMany,

  // Membuat vwProduct baru
  create: prisma.vwProduct.create,

  // Memperbarui vwProduct
  update: prisma.vwProduct.update,

  // Menghapus vwProduct
  delete: prisma.vwProduct.delete,

  // Fungsi lain yang terkait dengan model vwProduct
  count: prisma.vwProduct.count,
  findFirst: prisma.vwProduct.findFirst,
  upsert: prisma.vwProduct.upsert,
};
