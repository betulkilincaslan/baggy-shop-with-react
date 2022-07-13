import express from "express";
import dotenv from "dotenv";
import connectDBHandler from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDBHandler();

const app = express();

app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

const PORT = process.env.PORT;
app.listen(5000, () => console.log(`Listening on ${PORT}`));
