import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointment, scheduleAppointment } from "../controllers/appointmentsControllers";

let appointmentRouter = Router ();

appointmentRouter.get ("/", getAllAppointments);
appointmentRouter.get ("/:id", getAppointment);
appointmentRouter.post ("/schedule", scheduleAppointment);
appointmentRouter.put ("/cancel/:id", cancelAppointment);

export default appointmentRouter;