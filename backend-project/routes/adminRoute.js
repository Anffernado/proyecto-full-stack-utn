import { Router } from "express";
import { adminGet } from "../controllers/adminControllers.js";
import { auth } from "../middlewares/security.js";

const router = Router();

router.get('/', auth, adminGet);

export default router;