// src/models/Table/Satria/Incident.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Incident
export const Incident = {
  // Mendapatkan trx_LogHistory berdasarkan ID
  findUnique: prisma.trx_LogHistory.findUnique,

  // Mendapatkan semua trx_LogHistory
  findMany: prisma.trx_LogHistory.findMany,

  // Membuat trx_LogHistory baru
  create: prisma.trx_LogHistory.create,

  // Memperbarui trx_LogHistory
  update: prisma.trx_LogHistory.update,

  // Menghapus trx_LogHistory
  delete: prisma.trx_LogHistory.delete,

  // Fungsi lain yang terkait dengan model trx_LogHistory
  count: prisma.trx_LogHistory.count,
  findFirst: prisma.trx_LogHistory.findFirst,
  upsert: prisma.trx_LogHistory.upsert,
};
