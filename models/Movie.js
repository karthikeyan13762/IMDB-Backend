import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  plot: { type: String, required: true },
  poster: { type: String, required: true },
  producer: { type: mongoose.Schema.Types.ObjectId, ref: "Producer" },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
});

export const movieModel = mongoose.model("Movie", movieSchema);
