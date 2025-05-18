import actorModel from "../models/Actor.js";

const getActors = async (req, res) => {
  try {
    const actors = await actorModel.find();
    res.json(actors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createActor = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = new actorModel({ name, gender, dob, bio });
    await actor.save();
    res.status(201).json(actor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateActor = async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await actorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(actor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { updateActor, getActors, createActor };
