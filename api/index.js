import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';




import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import listingRoute from "./routes/listing.route.js";

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
app.use(cors())
app.use(morgan('dev'));


//routes
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/listings', listingRoute)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})