import { Router } from "express";
import { signIn, signup } from "../controllers/auth.controller.js";

const router = Router();


router.post('/sign-up', signup);
router.post('/sign-in', signIn);

export default router