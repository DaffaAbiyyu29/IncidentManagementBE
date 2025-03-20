// src/models/Table/Satria/Schedule_Recommendation.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Schedule_Recommendation
export const Schedule_Recommendation = {
  // Mendapatkan schedule_Recommendation berdasarkan ID
  findUnique: prisma.schedule_Recommendation.findUnique,

  // Mendapatkan semua schedule_Recommendation
  findMany: prisma.schedule_Recommendation.findMany,

  // Membuat schedule_Recommendation baru
  create: prisma.schedule_Recommendation.create,

  // Memperbarui schedule_Recommendation
  update: prisma.schedule_Recommendation.update,

  // Menghapus schedule_Recommendation
  delete: prisma.schedule_Recommendation.delete,

  // Fungsi lain yang terkait dengan model schedule_Recommendation
  count: prisma.schedule_Recommendation.count,
  findFirst: prisma.schedule_Recommendation.findFirst,
  upsert: prisma.schedule_Recommendation.upsert,
};
