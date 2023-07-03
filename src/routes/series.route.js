import express from "express";
import { SeriesValidationSchema } from "../validations/series.validation.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeriesController } from "../controllers/series.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/", SeriesController.getAll);
router.get("/:id", SeriesController.get);
router.post("/", validate(SeriesValidationSchema.add), SeriesController.add);
router.delete("/:id", SeriesController.delete);
router.patch("/:id", SeriesController.update);

export default router;
