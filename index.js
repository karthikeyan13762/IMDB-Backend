import express from "express";
import dotenv from "dotenv";
import connect from "./config.js";
dotenv.config();

const port = process.env.Port;

const app = express();
connect();
app.listen(port, () => {
  console.log("connected at port no " + port);
});
