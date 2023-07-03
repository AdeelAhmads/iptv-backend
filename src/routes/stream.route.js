import express from "express";
import { StreamValidationSchema } from "../validations/stream.validation.js";
import { validate, authenticate } from "../middleware/index.js";
import { StreamController } from "../controllers/stream.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/", StreamController.getAll);
router.get("/:id", StreamController.get);
router.post("/", validate(StreamValidationSchema.add), StreamController.add);
router.delete("/:id", StreamController.delete);
router.patch("/:id", StreamController.update);

export default router;
