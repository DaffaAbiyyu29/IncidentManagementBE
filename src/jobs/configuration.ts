import schedule from "node-schedule";
import { getCurrentWIBDate } from "../helpers/timeHelper";
import { sendIncidentEmails } from "./sendEmail";
import { detectPendingBilling } from "../controllers/cms/PendingBillingController";
import { detectPendingAR } from "../controllers/cms/PendingARController";
import { detectManhourDiscrepancy } from "../controllers/cms/ProcessController";
import { templateEmailSOA } from "../controllers/cms/EmailController";

// schedule.scheduleJob("0 * * * *", async () => {
schedule.scheduleJob("*/30 * * * * *", async () => {
  // await templateEmailSOA("AR");
  // await templateEmailSOA("Billing");
  await detectPendingBilling();
  await detectPendingAR();
  await detectManhourDiscrepancy();
  await sendIncidentEmails("BA");
  await sendIncidentEmails("User");
});
