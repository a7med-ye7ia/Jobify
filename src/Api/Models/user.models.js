/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    username: { type: String, required: true },
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: { type: String , default: 'user'},

    education: { type: String , required: true},
    country: { type: String , required: true},
    city: { type: String , required: true},
    phone: { type: String , required: true},
    birthday: { type: String , required: true},

    profilePic: { type: String ,default :"/profile/OIP.jfif"},
    coverPic: { type: String ,default :"/public/profile/photo-1532012197267-da84d127e765.jpeg"},

    isEmployer: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
},
{
    timestamps: true
}
);
module.exports = mongoose.model('User', UserSchema);
