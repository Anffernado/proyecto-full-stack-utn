import { Router } from "express";
import { logoutGet } from "../controllers/logoutControllers.js";

const router = Router();

router.get('/', logoutGet);

export default router;