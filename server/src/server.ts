import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./services/database";

dotenv.config();
const PORT = process.env.PORT;
const server = express();
const origin = process.env.ORIGINS;

server.use(cors({ origin: origin?.split(",") }));
server.use(express.json());

connectToDatabase().then(() =>
  server.listen(PORT, () => console.log(`http://localhost:${PORT}`))
);
