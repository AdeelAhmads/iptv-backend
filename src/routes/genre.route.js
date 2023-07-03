import express from "express";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreController } from "../controllers/genre.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/", GenreController.getAll);
router.get("/:id", GenreController.get);
router.post("/", validate(GenreValidationSchema.add), GenreController.add);
router.delete("/:id", GenreController.delete);
router.patch("/:id", GenreController.update);

export default router;
