import express from "express";
const router = express.Router();
import actorController from "../controllers/actorController.js";

router.get("/", actorController.getActors);
router.post("/", actorController.createActor);
router.put("/:id", actorController.updateActor);
export default router;
