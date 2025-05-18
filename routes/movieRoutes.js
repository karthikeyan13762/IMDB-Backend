import express from "express";
const router = express.Router();
import movieController from "../controllers/movieController.js";

router.get("/", movieController.getMovies);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
export default router;
