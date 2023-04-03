import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const server = express();
const origin = process.env.ORIGINS;

server.use(cors({ origin: origin?.split(",") }));
server.use(express.json());

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
