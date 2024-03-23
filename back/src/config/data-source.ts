import { DataSource } from "typeorm";
import dotenv, { config } from "dotenv";
dotenv.config();


export const AppDataSource = new DataSource ({
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": ["./src/entity/**/*.ts"],
    "migrations": [],
    "subscribers": [],
    // Esto es importante para evitar errores de certificados no autorizados
    // ssl: {rejectUnauthorized: false}
  },)