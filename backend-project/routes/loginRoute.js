import { Router } from "express";
import { loginGet, loginPost } from "../controllers/loginControllers.js";

const router = Router();

// router.get('/') --> Aqui vamos asumir que ya se envio la UI
router.get('/', loginGet);
router.post('/', loginPost);

export default router;