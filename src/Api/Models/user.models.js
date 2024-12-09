/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    jobTitle: { type: String },
    location: { type: String },
    skills: { type: [String] },
    experience: { type: Number },
    aboutMe: { type: String },
    profilePic: { type: String },
    coverPic: { type: String },
    isEmployer: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
},
{
    timestamps: true
}
);
module.exports = mongoose.model('User', UserSchema);
