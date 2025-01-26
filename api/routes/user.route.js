import { Router } from "express";

const router = Router();


router.get('/test', (req, res)=>{
    res.json({message: 'Hellow world'})
});

export default router