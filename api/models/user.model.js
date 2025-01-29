import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: "https://avatar.iran.liara.run/public/boy?username=wygv"
    },
    password: {
        type: String,
        required: true,
    }
},{timestamps: true});

const User = model("User", userSchema);
export default User;