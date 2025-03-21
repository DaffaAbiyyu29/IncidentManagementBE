// src/server.ts

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api";
import authRoutes from "./routes/auth";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi CORS
const corsOptions = {
  origin: "*", // Mengizinkan semua origin
};

app.use(cors(corsOptions));

// Tambahkan route auth kalau pengen login
app.use("/auth", authRoutes);

// Gunakan routing API kalau ingin manggil api
app.use("/api", apiRoutes);

// Kalo halaman gak ditemuin
app.get("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Halaman tidak ditemukan. Silakan periksa URL Anda.",
  });
});

// Menangani uncaughtException
process.on("uncaughtException", (err: Error) => {
  console.error("Uncaught Exception:", err);
});

// Menangani unhandledRejection
process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
  console.error("Unhandled Rejection:", reason);
});

process.removeAllListeners("warning");

// Start server di port 3000
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
