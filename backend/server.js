import express from "express";
import dotenv from "dotenv";
import connectDBHandler from "./config/db.js";

dotenv.config();

connectDBHandler();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(3000, () => console.log(`Listening on ${PORT}`));
