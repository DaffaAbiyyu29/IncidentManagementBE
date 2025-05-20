// src/controllers/Auth/AuthController.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Users } from "../../models/Table/Satria/ms_users";
import bcrypt from "bcryptjs";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { generateGUID } from "../../helpers/generateGuid";
import dotenv from "dotenv";

// Muat file .env
dotenv.config();

// Secret key untuk JWT
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

// Register user baru
export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, username, password, divisi, departemen, email, role } =
    req.body;

  try {
    // Cek apakah username sudah ada di database
    const existingUser = await Users.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user baru ke dalam database
    const newUser = await Users.create({
      data: {
        name,
        username,
        password: hashedPassword,
        divisi,
        departemen,
        email,
        role,
        created_at: getCurrentWIBDate(),
        updated_at: getCurrentWIBDate(),
      },
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", newUser });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Cari user berdasarkan username
    const user = await Users.findUnique({
      where: { username },
    });

    // Jika user tidak ditemukan
    if (!user) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    if (typeof user.password !== "string") {
      res.status(400).json({ message: "Password tidak valid." });
      return;
    }

    // Verifikasi password
    const isValidPassword = await bcrypt.compare(password, user.password);

    // Jika password tidak valid
    if (!isValidPassword) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { name: user.name, role: user.role, departemen: user.departemen },
      JWT_SECRET,
      { expiresIn: "24h" } // Set token expire time
    );

    res.json({
      success: true,
      message: "Login successful",
      data: { user, access_token: token, token_type: "Bearer" },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Error during login" });
  }
};
