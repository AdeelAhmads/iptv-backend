import express from "express";
import { StreamValidationSchema } from "../validations/stream.validation.js";
import { validate, authenticate } from "../middleware/index.js";
import { StreamController } from "../controllers/stream.controller.js";

const router = express.Router();
// router.get("/", authenticate, GenreController.getAll);
router.get("/",authenticate, StreamController.getAll);
router.get("/:id",authenticate, StreamController.get);
router.post("/", validate(StreamValidationSchema.add), StreamController.add);
router.delete("/:id",authenticate, StreamController.delete);
router.patch("/:id",authenticate, StreamController.update);

export default router;
