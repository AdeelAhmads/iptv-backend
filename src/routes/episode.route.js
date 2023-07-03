import express from "express";
import { EpisodeValidationSchema } from "../validations/episode.validation.js";
import { validate, authenticate } from "../middleware/index.js";
import { EpisodeController } from "../controllers/episode.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/", EpisodeController.getAll);
router.get("/:id", EpisodeController.get);
router.post("/", validate(EpisodeValidationSchema.add), EpisodeController.add);
router.delete("/:id", EpisodeController.delete);
router.patch("/:id", EpisodeController.update);

export default router;
