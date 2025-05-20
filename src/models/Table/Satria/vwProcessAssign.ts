// src/models/Table/Satria/vwProcessAssign2All.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwProcessAssign2All
export const vwProcessAssign2All = {
  // Mendapatkan vwProcessAssign2All berdasarkan ID
  findUnique: prisma.vwProcessAssign2All.findUnique,

  // Mendapatkan semua vwProcessAssign2All
  findMany: prisma.vwProcessAssign2All.findMany,

  // Membuat vwProcessAssign2All baru
  create: prisma.vwProcessAssign2All.create,

  // Memperbarui vwProcessAssign2All
  update: prisma.vwProcessAssign2All.update,

  // Menghapus vwProcessAssign2All
  delete: prisma.vwProcessAssign2All.delete,

  // Fungsi lain yang terkait dengan model vwProcessAssign2All
  count: prisma.vwProcessAssign2All.count,
  findFirst: prisma.vwProcessAssign2All.findFirst,
  upsert: prisma.vwProcessAssign2All.upsert,
};
