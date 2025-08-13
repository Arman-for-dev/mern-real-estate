import mongoose, {model } from "mongoose"


const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reqularPrice: {
        type: Number,
        required: true
    },
    disconnectPrice:{
        type: Number,
        required: true
    },
    bathroom:{
        type: Number,
        required: true
    },
    bedroom:{
        type: Number,
        required: true
    },
    furnished:{
        type: Boolean,
        required: true
    },
    parking:{
        type: Boolean,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    offer:{
        type: Boolean,
        required: true
    },
    imageUrls:{
        type: Array,
        required: true
    },
    userRef:{
        type: String,
        required: true
    }
},{timestamps: true});

const Listing = model('Listing', listingSchema);
export default Listing;