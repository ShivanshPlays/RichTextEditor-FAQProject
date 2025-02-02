import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import faqRoutes from "./routes/faqRoutes";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.Frontend_URL,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/faqdb");

app.use("/api/faqs", faqRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
