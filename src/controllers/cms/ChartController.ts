import { Request, Response } from "express";
import { PrismaClient } from "../../../prisma/generated/satria-client";
import { getWeeksInMonthTrimmed } from "../../helpers/timeHelper";

const prisma = new PrismaClient();

// export const chartIncident = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { type } = req.body;
//     const currentDate = new Date();
//     const monthParam = req.query.month ?? String(currentDate.getMonth() + 1);
//     const yearParam = req.query.year ?? String(currentDate.getFullYear());

//     const monthNumber = Number(monthParam);
//     const yearNumber = Number(yearParam);

//     const weeks = getWeeksInMonthTrimmed(yearNumber, monthNumber);
//     const weeklyCounts: {
//       week: number;
//       count: number;
//       start: string;
//       end: string;
//     }[] = [];

//     let totalCount = 0;

//     for (let i = 0; i < weeks.length; i++) {
//       const [start, end] = weeks[i];

//       const count = await prisma.trx_LogHistory.count({
//         where: {
//           OpenDate: {
//             gte: start,
//             lte: end,
//           },
//           AND: { IncidentType: type },
//         },
//       });

//       // Konversi kembali ke WIB jika perlu
//       const startDateString = start.toLocaleString("id-ID", {
//         timeZone: "Asia/Jakarta",
//       });
//       const endDateString = end.toLocaleString("id-ID", {
//         timeZone: "Asia/Jakarta",
//       });

//       weeklyCounts.push({
//         week: i + 1,
//         count,
//         start: startDateString,
//         end: endDateString,
//       });

//       totalCount += count;
//     }

//     res.status(200).json({
//       success: true,
//       message: "Berhasil mengambil data chart",
//       data: {
//         month: monthNumber,
//         year: yearNumber,
//         weeklyCounts,
//         totalCount,
//       },
//     });
//   } catch (err) {
//     console.error("Error :", err);
//     res.status(500).json({
//       success: false,
//       message: "Error",
//     });
//   }
// };

export const chartIncident = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const currentDate = new Date();
    const monthParam = req.query.month ?? String(currentDate.getMonth() + 1);
    const yearParam = req.query.year ?? String(currentDate.getFullYear());

    const monthNumber = Number(monthParam);
    const yearNumber = Number(yearParam);
    const types = [
      "Pending Billing",
      "Pending AR",
      "Manhour Discrepancy",
      "Predictive Potential Delay",
      "Vendor Delivery",
      "Subcont Delivery",
    ];

    const weeks = getWeeksInMonthTrimmed(yearNumber, monthNumber);

    const result: Record<
      string,
      {
        counts: Record<string, { count: number; start: string; end: string }>;
        totalCount: number;
      }
    > = {};

    for (const incidentType of types) {
      const counts: Record<
        string,
        { count: number; start: string; end: string }
      > = {};
      let totalCount = 0;

      for (let i = 0; i < weeks.length; i++) {
        const [start, end] = weeks[i];

        const count = await prisma.trx_LogHistory.count({
          where: {
            OpenDate: {
              gte: start,
              lte: end,
            },
            IncidentType: incidentType,
          },
        });

        const startDateString = start.toLocaleString("id-ID", {
          timeZone: "Asia/Jakarta",
        });
        const endDateString = end.toLocaleString("id-ID", {
          timeZone: "Asia/Jakarta",
        });

        counts[`week ${i + 1}`] = {
          count,
          start: startDateString,
          end: endDateString,
        };

        totalCount += count;
      }

      result[incidentType] = {
        counts,
        totalCount,
      };
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data chart",
      data: {
        month: monthNumber,
        year: yearNumber,
        result,
      },
    });
  } catch (err) {
    console.error("Error :", err);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data chart",
    });
  }
};
