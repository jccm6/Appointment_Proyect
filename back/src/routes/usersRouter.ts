import express, { Router, Request, Response, NextFunction } from "express";
import {getAllUsers, getUser, loginUser, signUser, putUser} from "../controllers/userController";
// import {deleteUser, getAllUsers, getUser, loginUser, putUser, signUser} from "../controllers/userController";
let userRouter = Router();

userRouter.get("/registrar", (req:Request, res:Response) => {
    res.send(`Metodo invalido para /registrar`)
});
userRouter.post("/registrar", signUser);

userRouter.get("/holis", (req:Request, res:Response) => {
    res.send(`Estamos en el holis de user`)
});
userRouter.put("/actualizar/:id", putUser);

userRouter.post("/login", loginUser);

userRouter.get("/:id", getUser);
// userRouter.delete("/eliminar/:id", deleteUser);

userRouter.get("/", getAllUsers);

export default userRouter;