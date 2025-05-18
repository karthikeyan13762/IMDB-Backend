import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: { type: String, required: true },
});

const producerModel = mongoose.model("Producer", producerSchema);
export default producerModel;
