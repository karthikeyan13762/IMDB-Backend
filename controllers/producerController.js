import producerModel from "../models/Producer.js";

const getProducers = async (req, res) => {
  try {
    const producers = await producerModel.find();
    res.json(producers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProducer = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = new producerModel({ name, gender, dob, bio });
    await producer.save();
    res.status(201).json(producer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProducer = async (req, res) => {
  try {
    const { id } = req.params;
    const producer = await producerModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(producer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { getProducers, updateProducer, createProducer };
