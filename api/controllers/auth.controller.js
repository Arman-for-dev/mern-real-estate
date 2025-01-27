import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";


export const signup =  async (req, res, next)=>{
    const {username, email, password} = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    try {
        
        await newUser.save();
        res.status(201).json('User created successfully')
    } catch (error) {
        next(errorHandler(550, 'Internal Error'))
    }
}


export const signIn = async (req, res, next) =>{
    const {email, password} = req.body;

    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found'));

        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404, 'Password does not match!'));


        const token = jwt.sign({id: validUser._id}, process.env.JWTSECRET, {expiresIn: '7d'});

        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}