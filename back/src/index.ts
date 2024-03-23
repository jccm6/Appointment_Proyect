import express, { NextFunction, Request, Response } from "express";
import dotenv, { config } from "dotenv";
import indexRouter from "./routes/indexRouter";
import cors from "cors";
import morgan from "morgan";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
let app = express();
dotenv.config();
let PORT = process.env.PORT;

//MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//ROUTERS
app.use('/', indexRouter);
// app.use (indexRouter);
// app.use ("/", (req:Request, res:Response) => {
//     res.send(`Estamos en el home`)
// });

// Middleware para manejar errores 404 (ruta no encontrada)
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Ruta no encontrada o Metodo HTTP incorrecto');
});
  
// Middleware de manejo de errores genérico
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    // res.status(500).send('Algo salió mal en el servidor');
    res.status(500).send('Algo salió mal en el servidor ' + err);
});

//INICIALIZACION
AppDataSource.initialize()
.then ( () => {
    app.listen(PORT, () => {
        console.log(`Servidor desde http://localhost:${PORT}`);
        
    })
})
.catch ( (error) => {
    console.error("Error durante la inicialización:", error);
}

)