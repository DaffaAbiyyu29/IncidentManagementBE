// src/models/Table/Satria/VF04.ts

import { PrismaClient as SatriaClient } from "../../../../prisma/generated/satria-client";

// Inisialisasi Prisma Client
const prisma = new SatriaClient();

// Model VF04
export const VF04 = {
  // Mendapatkan dataVF04 berdasarkan ID
  findUnique: prisma.dataVF04.findUnique,

  // Mendapatkan semua dataVF04
  findMany: prisma.dataVF04.findMany,

  // Membuat dataVF04 baru
  create: prisma.dataVF04.create,

  // Memperbarui dataVF04
  update: prisma.dataVF04.update,

  // Menghapus dataVF04
  delete: prisma.dataVF04.delete,

  // Fungsi lain yang terkait dengan model dataVF04
  count: prisma.dataVF04.count,
  findFirst: prisma.dataVF04.findFirst,
  upsert: prisma.dataVF04.upsert,
};
