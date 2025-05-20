// src/models/Table/Satria/Users.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model Users
export const Users = {
  // Mendapatkan ms_users berdasarkan ID
  findUnique: prisma.ms_users.findUnique,

  // Mendapatkan semua ms_users
  findMany: prisma.ms_users.findMany,

  // Membuat ms_users baru
  create: prisma.ms_users.create,

  // Memperbarui ms_users
  update: prisma.ms_users.update,

  // Menghapus ms_users
  delete: prisma.ms_users.delete,

  // Fungsi lain yang terkait dengan model ms_users
  count: prisma.ms_users.count,
  findFirst: prisma.ms_users.findFirst,
  upsert: prisma.ms_users.upsert,
};
