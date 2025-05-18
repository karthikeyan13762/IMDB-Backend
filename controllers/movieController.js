import movieModel from "../models/Movie.js";

const getMovies = async (req, res) => {
  try {
    const movies = await movieModel
      .find()
      .populate("actors")
      .populate("producer");
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, plot, poster, producer, actors } = req.body;
    const movie = new movieModel({
      name,
      yearOfRelease,
      plot,
      poster,
      producer,
      actors,
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, yearOfRelease, plot, poster, producer, actors } = req.body;
    const movie = await movieModel.findByIdAndUpdate(
      id,
      { name, yearOfRelease, plot, poster, producer, actors },
      { new: true }
    );
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getMovies,
  createMovie,
  updateMovie,
};
