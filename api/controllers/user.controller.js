import User from "../models/user.model";
import { errorHandler } from "../utils/error"



export const updateUser = async (req, res, next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'));

    try {
        
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        }, {new: true});

        const {password, ...rest} = updateUser._doc;

        res.status(200).json(res);
   

    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}