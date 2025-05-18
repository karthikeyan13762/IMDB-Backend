import express, { Router } from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";
import cors from "cors";
import actorRoutes from "./routes/actorRoutes.js";
import producerRoutes from "./routes/producerRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { verifyToken } from "./middleware/authMiddleware.js";
const port = process.env.Port;

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", verifyToken, authRoutes);
app.use("/api/actors", verifyToken, actorRoutes);
app.use("/api/producers", verifyToken, producerRoutes);
app.use("/api/movies", verifyToken, movieRoutes);

connectDB();
app.listen(port, () => {
  console.log("connected at port no " + port);
});
