// src/routes/api.ts
import express, { Request, Response } from "express";
import * as PendingARController from "../controllers/cms/PendingARController";
import * as PendingBillingController from "../controllers/cms/PendingBillingController";
import * as ScheduleRecomendation from "../controllers/cms/ScheduleRecomendationController";
import * as Email from "../controllers/cms/EmailController";
import { authenticateJWT } from "../middleware/auth";

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

router.get("/pending-ar", async (req: Request, res: Response) => {
  await PendingARController.getAllFBL5N(req, res);
});

router.get("/pending-ar-incident", async (req: Request, res: Response) => {
  await PendingARController.getAllFBL5NIncident(req, res);
});

router.get("/pending-billing", async (req: Request, res: Response) => {
  await PendingBillingController.getAllVF04(req, res);
});

router.get("/schedule-recommendation", async (req: Request, res: Response) => {
  await ScheduleRecomendation.getAllScheduleRecomendation(req, res);
});

router.post("/sendEmail", async (req: Request, res: Response) => {
  await Email.sendEmail(req, res);
});

export default router;
