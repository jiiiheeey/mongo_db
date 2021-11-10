import { Router } from "express";
import {
  uploadInputController,
  test
} from "../controllers/inputControllers.js";

const router = Router();

// router.post("/signup", userSignupController);

router.post("/upload",   uploadInputController);

router.get("/test", test)

export default router;
