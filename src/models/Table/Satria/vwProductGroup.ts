// src/models/Table/Satria/vwProductGroup.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client-patriapowerapps";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model vwProductGroup
export const vwProductGroup = {
  // Mendapatkan vwProductGroup berdasarkan ID
  findUnique: prisma.vwProductGroup.findUnique,

  // Mendapatkan semua vwProductGroup
  findMany: prisma.vwProductGroup.findMany,

  // Membuat vwProductGroup baru
  create: prisma.vwProductGroup.create,

  // Memperbarui vwProductGroup
  update: prisma.vwProductGroup.update,

  // Menghapus vwProductGroup
  delete: prisma.vwProductGroup.delete,

  // Fungsi lain yang terkait dengan model vwProductGroup
  count: prisma.vwProductGroup.count,
  findFirst: prisma.vwProductGroup.findFirst,
  upsert: prisma.vwProductGroup.upsert,
};
