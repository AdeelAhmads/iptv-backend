import express from "express";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreController } from "../controllers/genre.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/",authenticate, GenreController.getAll);
router.get("/:id",authenticate, GenreController.get);
router.post("/", validate(GenreValidationSchema.add), GenreController.add);
router.delete("/:id",authenticate, GenreController.delete);
router.patch("/:id",authenticate, GenreController.update);

export default router;
