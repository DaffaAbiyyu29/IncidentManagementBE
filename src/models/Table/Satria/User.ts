// src/models/Table/Satria/User.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model User
export const User = {
  // Mendapatkan pengguna berdasarkan ID
  findUnique: prisma.users.findUnique,

  // Mendapatkan semua pengguna
  findMany: prisma.users.findMany,

  // Membuat pengguna baru
  create: prisma.users.create,

  // Memperbarui pengguna
  update: prisma.users.update,

  // Menghapus pengguna
  delete: prisma.users.delete,

  // Fungsi lain yang terkait dengan model users
  count: prisma.users.count,
  findFirst: prisma.users.findFirst,
  upsert: prisma.users.upsert,
};
