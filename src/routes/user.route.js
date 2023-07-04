import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { LoginValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, UserController.getAll);
router.get("/:id/streams", authenticate, UserController.getStreams);
router.get("/:id",authenticate,  UserController.get);
router.post("/registration", validate(UserValidationSchema.add), UserController.add);
router.post("/login", validate(LoginValidationSchema.add), UserController.getUser);
router.delete("/:id",authenticate, UserController.delete);
router.patch("/:id",authenticate, UserController.update);

export default router;
