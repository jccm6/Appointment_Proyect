import { Router } from "express";
import userRouter from "./usersRouter";
import appointmentRouter from "./turnsRouter";
let indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/appointment", appointmentRouter);

export default indexRouter;