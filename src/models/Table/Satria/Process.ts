// src/models/Table/Satria/Process.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Process
export const Process = {
  // Mendapatkan process berdasarkan ID
  findUnique: prisma.process.findUnique,

  // Mendapatkan semua process
  findMany: prisma.process.findMany,

  // Membuat process baru
  create: prisma.process.create,

  // Memperbarui process
  update: prisma.process.update,

  // Menghapus process
  delete: prisma.process.delete,

  // Fungsi lain yang terkait dengan model process
  count: prisma.process.count,
  findFirst: prisma.process.findFirst,
  upsert: prisma.process.upsert,
};
