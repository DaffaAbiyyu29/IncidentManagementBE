// src/models/Table/Satria/User.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model User
export const User = {
  // Mendapatkan pengguna berdasarkan ID
  findUnique: prisma.ms_users.findUnique,

  // Mendapatkan semua pengguna
  findMany: prisma.ms_users.findMany,

  // Membuat pengguna baru
  create: prisma.ms_users.create,

  // Memperbarui pengguna
  update: prisma.ms_users.update,

  // Menghapus pengguna
  delete: prisma.ms_users.delete,

  // Fungsi lain yang terkait dengan model ms_users
  count: prisma.ms_users.count,
  findFirst: prisma.ms_users.findFirst,
  upsert: prisma.ms_users.upsert,
};
