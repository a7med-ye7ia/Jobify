/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

    isEmployer: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
},
{
    timestamps: true
}
);
module.exports = mongoose.model('User', UserSchema);
