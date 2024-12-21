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
        responsibilities: {type: Array, required: false},
        tags: {type: Array, required: false},
        location: {type: String, required: false},
        skills: {type: Array, required: false},  
        salary: {type: Number, required: false},
       
        degree: {type:String, required: false},
        catigory: {type:String, required: false},
        photo: { type: String ,default :"/public/jobIcon/Logo (1).png"},    
        timeadded: {type:String, required: true}
},{
    timestamps: true
}
);
module.exports = mongoose.model('Job',JobSchema);

