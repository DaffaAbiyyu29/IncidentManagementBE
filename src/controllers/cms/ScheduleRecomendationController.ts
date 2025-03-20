// src/controllers/cms/ScheduleRecomendationController.ts
import { Request, Response } from "express";
import { Schedule_Recommendation } from "../../models/Table/Satria/ScheduleRecomendation";
import { getCurrentWIBDate } from "../../helpers/timeHelper";
import { formattedDate } from "../../helpers/formattedDate";

// View all dataScheduleRecomendation
export const getAllScheduleRecomendation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sort = "Product",
      order = "asc",
    } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * pageSize;

    const validSortFields = [
      "PN",
      "PRO",
      "Product",
      "ProductGroup",
      "Process",
      "Dependency",
      "Maksimal_Produksi_per_Base",
      "ProcessOrder",
      "PlanStartDate",
      "PlanEndDate",
      "Start_Date",
      "End_Date",
      "Estimated_Material_Arrived",
      "Lead_Time_Process_Standar",
      "Lead_Time_Estimation_Process",
      "Process_Status",
      "MPSDueDate",
      "Finished_Prediction",
      "Status_Unit_Delivery",
      "Capacity_Utilization",
      "Status_Capacity",
      "Status_Material",
    ];

    const sortField = validSortFields.includes(sort as string)
      ? (sort as string)
      : "PlanStartDate";
    const sortOrder = order === "desc" ? "desc" : "asc";

    const dataScheduleRecomendationData =
      await Schedule_Recommendation.findMany({
        where: {
          OR: [
            { PN: { contains: search as string } },
            { Product: { contains: search as string } },
            { Process: { contains: search as string } },
          ],
        },
        orderBy: {
          [sortField]: sortOrder,
        },
        skip,
        take: pageSize,
      });

    const totalItems = await Schedule_Recommendation.count({
      where: {
        OR: [
          { PN: { contains: search as string } },
          { Product: { contains: search as string } },
          { Process: { contains: search as string } },
        ],
      },
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    const serializedData = dataScheduleRecomendationData.map((item) => {
      const planStartDate = item.PlanStartDate
        ? new Date(item.PlanStartDate)
        : new Date();

      let slaCCDays = 7;
      if (item.Status_Unit_Delivery?.toLowerCase() === "ex work") {
        slaCCDays = 7;
      } else if (item.Status_Unit_Delivery?.toLowerCase() === "loco") {
        slaCCDays = 30;
      }
      const slaCC = new Date(planStartDate);
      slaCC.setDate(slaCC.getDate() + slaCCDays);

      const slaUser = new Date(slaCC);
      slaUser.setDate(slaUser.getDate() + 7);

      return {
        ...item,
        PRO: Number(item.PRO),
        PlanStartDate: formattedDate(item.PlanStartDate),
        PlanEndDate: formattedDate(item.PlanEndDate),
        Start_Date: formattedDate(item.Start_Date),
        End_Date: formattedDate(item.End_Date),
        Estimated_Material_Arrived: formattedDate(
          item.Estimated_Material_Arrived
        ),
        Finished_Prediction: formattedDate(item.Finished_Prediction),
        MPSDueDate: formattedDate(item.MPSDueDate),
        SLACC: formattedDate(slaCC),
        SLAUser: formattedDate(slaUser),
        Status: "-",
      };
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data Schedule Recommendation",
      data: {
        data: serializedData,
        totalPages,
        currentPage: pageNumber,
        totalItems,
      },
    });
  } catch (err) {
    console.error("Error fetching Schedule Recommendation data:", err);
    res.status(500).json({
      success: false,
      message: "Error mengambil data Schedule Recommendation",
    });
  }
};
