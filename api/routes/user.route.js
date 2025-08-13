import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();


router.get('/me', verifyToken, (req, res)=>{
    try {
        const id = req.params.id;
        console.log(id)
    } catch (error) {
        console.log(error)
    }
}); 

router.put('/update/:id', verifyToken )

export default router