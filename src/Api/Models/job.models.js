/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const { DialogTitle } = require('@headlessui/react');
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const JobSchema=new Schema(
    {
        title: {type: String, required: true},//required
        position: {type: String, required: true},//required
        type: {type: String, required: false},
        company: {type: String, required: false},
        description: {type: String, required: true},//required
        requirements: {type: String, required: false},
        tags: {type: Array, required: false},
        location: {type: String, required: false},
        skills: {type: Array, required: false},  
        salary: {type: Number, required: false},
        category: { type: String, required: false },
        photo: { type: String ,default :"/public/jobIcon/Logo (1).png"},    
},{
    timestamps: true
}
);
module.exports = mongoose.model('Job',JobSchema);

