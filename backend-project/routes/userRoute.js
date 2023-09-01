import { Router } from "express";
import { userGet } from "../controllers/userControllers.js";
import { auth } from "../middlewares/security.js";

const router = Router();

router.get('/', auth, userGet);

export default router;