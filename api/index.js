import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log(`Database connected!`)
    })
    .catch((err)=>{
        console.log(err)
    });


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})