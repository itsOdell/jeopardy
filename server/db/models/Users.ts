const {Schema, model} = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Enter a username"],
        unique: [true, "Username is already taken"],
        minLength: [6, "Username must be at least 6 characters"]
    },
    email: {
        type: String,
        required: [true, "Enter your email address"], 
        unique: [true, "Email is already in use"], 
        validate: {
            validator: (v: string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Enter your password"],
        minLength: [8, "Password must be at least 8 characters"],
        validate: {
            validator: (v: string) => {
                return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v)
            },
            message: "Password must contain: at lease 1 lowercase, at least 1 uppercase and least 1 number"
        }
    },
    projects: [{
        part: String,
        one: {
            question: String,
            value: Number,
            answer: String
        },
        two: {
            question: String,
            value: Number,
            answer: String
        },
        three: {
            question: String,
            value: Number,
            answer: String
        },
        four: {
            question: String,
            value: Number,
            answer: String
        },     
        five: {
            question: String,
            value: Number,
            answer: String
        }
    }]
}, {timestamps: true})
userSchema.plugin(uniqueValidator)

const User = model('Users', userSchema);
module.exports = User;