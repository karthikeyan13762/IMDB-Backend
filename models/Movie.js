import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  plot: { type: String, required: true },
  poster: { type: String, required: true },
  producer: { type: mongoose.Schema.Types.ObjectId, ref: "Producer" }, // one to many
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }], // many to many
});

const movieModel = mongoose.model("Movie", movieSchema);
export default movieModel;
