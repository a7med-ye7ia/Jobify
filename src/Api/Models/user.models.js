/* eslint-disable no-undef */
const mongoose = require('mongoose');

<<<<<<< HEAD
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
    education: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: String, required: true },
    profilePic: { type: Buffer },
    coverPic: { type: Buffer },
=======
const UserSchema = new Schema(
{
    username: { type: String },
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: { type: String , default: 'user'},

    education: { type: String },
    country: { type: String },
    city: { type: String },
    phone: { type: String },
    birthday: { type: String },

    
    profilePic:{ type: Buffer},
    coverPic:{ type: Buffer},

>>>>>>> 54ede084692decd4b2bdd91bd7734aed14578c5f
    isEmployer: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
