import mongoose from "mongoose";
import {themeSchema} from './Theme.js'


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    theme: {
        type: themeSchema,
    }
})


export default new mongoose.model('User', userSchema)
