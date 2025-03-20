// src/models/Table/Satria/FBL5N.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model FBL5N
export const FBL5N = {
  // Mendapatkan dataFBL5N berdasarkan ID
  findUnique: prisma.dataFBL5N.findUnique,

  // Mendapatkan semua dataFBL5N
  findMany: prisma.dataFBL5N.findMany,

  // Membuat dataFBL5N baru
  create: prisma.dataFBL5N.create,

  // Memperbarui dataFBL5N
  update: prisma.dataFBL5N.update,

  // Menghapus dataFBL5N
  delete: prisma.dataFBL5N.delete,

  // Fungsi lain yang terkait dengan model dataFBL5N
  count: prisma.dataFBL5N.count,
  findFirst: prisma.dataFBL5N.findFirst,
  upsert: prisma.dataFBL5N.upsert,
};
