import { Request, Response } from "express";
import nodemailer, { TransportOptions } from "nodemailer";

export const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Pakai variabel lingkungan untuk keamanan
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      headers: {
        "X-Mailer": "Nodemailer",
      },
    };

    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({
      message: "Email berhasil dikirim",
      info: info.response,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Gagal mengirim email",
      error: error.message,
    });
  }
};
