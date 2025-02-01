import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import faqRoutes from "./routes/faqRoutes";

dotenv.config();
const app = express();

app.use(cors(
	     { origin: 'http://texteditor.shivanshsaxena.tech', // Replace with your frontend URL
  	    	methods: ['GET', 'POST'],  // Allow specific methods
  		allowedHeaders: ['Content-Type', 'Authorization'], }// Allow specific headers
	    ));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/faqdb");

app.use("/api/faqs", faqRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
