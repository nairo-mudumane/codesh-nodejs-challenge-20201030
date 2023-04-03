import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const server = express();
const origin =
  process.env.NODE_ENV === "DEVELOPMENT"
    ? "*"
    : "https://react-codesh20201030.onrender.com";

server.use(cors({ origin }));
server.use(express.json());

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
