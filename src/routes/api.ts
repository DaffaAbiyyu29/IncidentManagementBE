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
import * as User from "../controllers/cms/ms_users";
import * as Chart from "../controllers/cms/ChartController";
import * as Incident from "../controllers/cms/trx_IncidentController";
import * as PICA from "../controllers/cms/PICAController";
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

// -----------------------------------------------------------------------------------------  MANHOUR UTILIZATION
router.get("/process-unit", async (req: Request, res: Response) => {
  await ProcessController.getAllDataProcessUnit(req, res);
});

router.get("/detail-process-unit", async (req: Request, res: Response) => {
  await ProcessController.getDataDetailProcessUnit(req, res);
});

router.get(
  "/detail-process-assign-unit",
  async (req: Request, res: Response) => {
    await ProcessController.getDataProcessAssign(req, res);
  }
);

router.get(
  "/detail-process-activity-unit",
  async (req: Request, res: Response) => {
    await ProcessController.getDataProcessActivity(req, res);
  }
);

// -----------------------------------------------------------------------------------------  ACCOUNT RECEIVABLE
router.get("/data-ar", async (req: Request, res: Response) => {
  await PendingARController.getAllFBL5N(req, res);
});

// router.get("/pending-ar-incident", async (req: Request, res: Response) => {
//   await PendingARController.getAllFBL5NIncident(req, res);
// });

// -----------------------------------------------------------------------------------------  PENDING BILLING
router.get("/data-billing", async (req: Request, res: Response) => {
  await PendingBillingController.getAllVF04(req, res);
});

// -----------------------------------------------------------------------------------------  DELAY OPERATION
router.get("/schedule-recommendation", async (req: Request, res: Response) => {
  await ScheduleRecomendation.getAllScheduleRecomendation(req, res);
});

// -----------------------------------------------------------------------------------------  VENDOR PERFORMANCE
router.get("/vendor-performance", async (req: Request, res: Response) => {
  await AllPoController.getAllVendor(req, res);
});

// -----------------------------------------------------------------------------------------  SUBCONT PERFORMANCE
router.get("/subcont-performance", async (req: Request, res: Response) => {
  await AllPoController.getAllSubcont(req, res);
});

// -----------------------------------------------------------------------------------------  PIC
router.get("/user", async (req: Request, res: Response) => {
  await User.getAllUser(req, res);
});

router.post("/pic", async (req: Request, res: Response) => {
  await User.createUser(req, res);
});

router.put("/pic", async (req: Request, res: Response) => {
  await User.updateUser(req, res);
});

router.delete("/pic", async (req: Request, res: Response) => {
  await User.deleteUser(req, res);
});

// -----------------------------------------------------------------------------------------  PIC
router.get("/incident", async (req: Request, res: Response) => {
  await Incident.getAllIncidents(req, res);
});

router.post("/incident", async (req: Request, res: Response) => {
  await Incident.createIncident(req, res);
});

router.get("/pica/:IncidentID", async (req: Request, res: Response) => {
  await PICA.getPICA(req, res);
});

router.post("/pica", async (req: Request, res: Response) => {
  await PICA.createPICA(req, res);
});

// router.post("/detail-pica", async (req: Request, res: Response) => {
//   await PICA.createDetailPICA(req, res);
// });

router.post("/flag", async (req: Request, res: Response) => {
  await Incident.flagIncident(req, res);
});

router.get("/incident/mark-read", async (req: Request, res: Response) => {
  await Incident.markEmailAsRead(req, res);
});

router.get(
  "/notifications",
  authenticateJWT,
  async (req: Request, res: Response) => {
    await Incident.getAllNotifications(req, res);
  }
);

// router.get("/check-incident-ba", async (req: Request, res: Response) => {
//   await Incident.getIncidentsWithBAEmailDue(req, res);
// });

// router.get("/check-incident-user", async (req: Request, res: Response) => {
//   await Incident.getIncidentsWithUserEmailDue(req, res);
// });

// -----------------------------------------------------------------------------------------  CHART
router.get("/chart", async (req: Request, res: Response) => {
  await Chart.chartIncident(req, res);
});

// -----------------------------------------------------------------------------------------  SEND EMAIL
// router.post("/sendEmail", async (req: Request, res: Response) => {
//   await Email.sendEmail(req, res);
// });

export default router;
