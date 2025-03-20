// src/routes/api.ts
import express, { Request, Response } from "express";
import * as PendingARController from "../controllers/cms/PendingARController";
import * as PendingBillingController from "../controllers/cms/PendingBillingController";
import * as ProcessController from "../controllers/cms/ProcessController";
import * as ProcessActivityController from "../controllers/cms/ProcessActivityController";
import * as ProcessAssignController from "../controllers/cms/ProcessAssignController";
import * as AllPoController from "../controllers/cms/AllPoController";
import * as ScheduleRecomendation from "../controllers/cms/ScheduleRecomendationController";
import * as Email from "../controllers/cms/EmailController";
import { authenticateJWT } from "../middleware/auth";
import { Process } from "../models/Table/Satria/Process";

const router = express.Router();

// Jika ingin menggunakan middleware untuk semua routes
// router.use(authenticateJWT);

// router.get("/makanan", authenticateJWT, async (req: Request, res: Response) => {
//   await PendingARController.getAllFBL5N(req, res);
// });

// router.get(
//   "/makanan/:id",
//   authenticateJWT,
//   async (req: Request, res: Response) => {
//     await PendingARController.getFBL5NById(req, res);
//   }
// );

// router.post(
//   "/makanan",
//   authenticateJWT,
//   async (req: Request, res: Response) => {
//     await PendingARController.createFBL5N(req, res);
//   }
// );

// router.put(
//   "/makanan/:id",
//   authenticateJWT,
//   async (req: Request, res: Response) => {
//     await PendingARController.updateFBL5N(req, res);
//   }
// );

// router.delete(
//   "/makanan/:id",
//   authenticateJWT,
//   async (req: Request, res: Response) => {
//     await PendingARController.deleteFBL5N(req, res);
//   }
// );

// -----------------------------------------------------------------------------------------  ACCOUNT RECEIVABLE
router.get("/pending-ar", async (req: Request, res: Response) => {
  await PendingARController.getAllFBL5N(req, res);
});

router.get("/pending-ar-incident", async (req: Request, res: Response) => {
  await PendingARController.getAllFBL5NIncident(req, res);
});

// -----------------------------------------------------------------------------------------  PENDING BILLING
router.get("/pending-billing", async (req: Request, res: Response) => {
  await PendingBillingController.getAllVF04(req, res);
});

// -----------------------------------------------------------------------------------------  DELAY OPERATION
router.get("/schedule-recommendation", async (req: Request, res: Response) => {
  await ScheduleRecomendation.getAllScheduleRecomendation(req, res);
});

// -----------------------------------------------------------------------------------------  PROCESS
router.get("/process", async (req: Request, res: Response) => {
  await ProcessController.getAllProcess(req, res);
});

// -----------------------------------------------------------------------------------------  PROCESS ACTIVITY
router.get("/process-activity", async (req: Request, res: Response) => {
  await ProcessActivityController.getAllProcessActivity(req, res);
});

// -----------------------------------------------------------------------------------------  PROCESS ASSIGN
router.get("/process-assign", async (req: Request, res: Response) => {
  await ProcessAssignController.getAllProcessAssign(req, res);
});

// -----------------------------------------------------------------------------------------  VENDOR PERFORMANCE
router.get("/vendor-performance", async (req: Request, res: Response) => {
  await AllPoController.getAllVendor(req, res);
});

// -----------------------------------------------------------------------------------------  SUBCONT PERFORMANCE
router.get("/subcont-performance", async (req: Request, res: Response) => {
  await AllPoController.getAllSubcont(req, res);
});

// -----------------------------------------------------------------------------------------  SEND EMAIL
router.post("/sendEmail", async (req: Request, res: Response) => {
  await Email.sendEmail(req, res);
});

export default router;
