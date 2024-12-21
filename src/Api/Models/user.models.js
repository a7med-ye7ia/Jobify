/* eslint-disable no-undef */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Username is required"], 
        minlength: [3, "Username must be at least 3 characters long"], 
        maxlength: [10, "Username cannot exceed 10 characters"], 
        match: [/^[a-zA-Z0-9]+$/, "Username can only contain alphanumeric characters"] 
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { 
        type: String, 
        required: [true, "Password is required"], 
        minlength: [8, "Password must be at least 8 characters long"], 
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, 
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ] 
    },
    role: { type: String, default: 'user' },
    education: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    phone: { type: String, required: false },
    birthday: { type: String, required: false },
    profilePic: { type: Buffer, required: false },
    coverPic: { type: Buffer, required: false },
});

module.exports = mongoose.model('User', userSchema);
