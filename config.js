import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connect;
