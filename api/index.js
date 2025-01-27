import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

import authRoute from "./routes/auth.route.js";
import bodyParser from "body-parser";

const app = express();

const dbUri = process.env.MONDODBURI;
mongoose.connect(dbUri)
    .then(()=>{
        console.log(`Database connected!`)
    })
    .catch((err)=>{
        console.log(err)
    });

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '2mb'}));


//routes
app.use('/api/auth', authRoute)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});


const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})