import { Router } from "express";
import { registerWithGoogle, signIn, signup } from "../controllers/auth.controller.js";

const router = Router();


router.post('/sign-up', signup);
router.post('/sign-in', signIn);
router.post('/google', registerWithGoogle);

export default router