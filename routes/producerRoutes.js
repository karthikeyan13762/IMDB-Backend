import express from "express";
export const router = express.Router();
import producerController from "../controllers/producerController.js";

router.get("/", producerController.getProducers);
router.post("/", producerController.createProducer);
router.put("/:id", producerController.updateProducer);

export default router;
