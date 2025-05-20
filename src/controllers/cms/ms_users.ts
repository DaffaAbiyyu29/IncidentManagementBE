import { Request, Response } from "express";
import { PrismaClient } from "../../../prisma/generated/satria-client";

const prisma = new PrismaClient();

export const getAllUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "id",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;

    const validSortFields = ["id", "name", "departemen", "divisi", "email"];
    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "id";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const whereClause = {
      OR: [
        { name: { contains: search as string } },
        { email: { contains: search as string } },
        { divisi: { contains: search as string } },
        { departemen: { contains: search as string } },
        { username: { contains: search as string } },
      ],
    };

    const users = await prisma.ms_users.findMany({
      where: whereClause,
      orderBy: { [sortField]: sortOrder },
      skip,
      take: pageSize,
    });

    const totalItems = await prisma.ms_users.count({ where: whereClause });
    const totalPages = Math.ceil(totalItems / pageSize);

    const responseData = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      divisi: user.divisi,
      departemen: user.departemen,
    }));

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data user",
      data: {
        data: responseData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res
      .status(500)
      .json({ success: false, message: "Gagal mengambil data user" });
  }
};

// CREATE PIC
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, username, email, password, divisi, departemen, role } =
      req.body;

    if (!name || !username || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Field wajib: name, username, email, password",
      });
      return;
    }

    // Cek apakah username/email sudah digunakan
    const existing = await prisma.ms_users.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existing) {
      res.status(409).json({
        success: false,
        message: "Username atau email sudah digunakan",
      });
      return;
    }

    await prisma.ms_users.create({
      data: {
        name,
        username,
        email,
        password,
        divisi,
        departemen,
        role,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    res
      .status(201)
      .json({ success: true, message: "User berhasil ditambahkan" });
  } catch (error) {
    console.error("Error createUser:", error);
    res.status(500).json({ success: false, message: "Gagal menambahkan user" });
  }
};

// UPDATE USER
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id, name, username, email, divisi, departemen, role } = req.body;

  try {
    const user = await prisma.ms_users.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User tidak ditemukan" });
      return;
    }

    await prisma.ms_users.update({
      where: { id: Number(id) },
      data: {
        name,
        username,
        email,
        divisi,
        departemen,
        role,
        updated_at: new Date(),
      },
    });

    res
      .status(200)
      .json({ success: true, message: "User berhasil diperbarui" });
  } catch (error) {
    console.error("Error updateUser:", error);
    res.status(500).json({ success: false, message: "Gagal memperbarui user" });
  }
};

// DELETE USER
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;

  try {
    await prisma.ms_users.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ success: true, message: "User berhasil dihapus" });
  } catch (error) {
    console.error("Error deleteUser:", error);
    res.status(500).json({ success: false, message: "Gagal menghapus user" });
  }
};
