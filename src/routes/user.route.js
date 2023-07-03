import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
// router.get("/", authenticate, UserController.getAll);
router.get("/", UserController.getAll);
router.get("/:id", UserController.get);
router.post("/", validate(UserValidationSchema.add), UserController.add);
router.delete("/:id", UserController.delete);
router.patch("/:id", UserController.update);

export default router;
