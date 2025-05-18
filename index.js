import express, { Router } from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";
import cors from "cors";
import actorRoutes from "./routes/actorRoutes.js";
import producerRoutes from "./routes/producerRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

const port = process.env.Port;

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/actors", actorRoutes);
app.use("/api/producers", producerRoutes);
app.use("/api/movies", movieRoutes);

connectDB();
app.listen(port, () => {
  console.log("connected at port no " + port);
});
