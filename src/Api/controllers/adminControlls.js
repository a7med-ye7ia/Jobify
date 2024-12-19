/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const userModel = require('../Models/user.models');
// const jobModel = require('../Models/job.models');

const getAllUsers = async (req,res)=>{
    const users = await userModel.find({});
    res.send(users).status(200);
}

const deleteUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const  user = await userModel.findByIdAndDelete(id);
        res.status(200).send(`${user.username} Deleted Successfully`);
    } catch (error) {
        res.status(500).json(error.errmsg);
    }
}

module.exports = {getAllUsers,deleteUser};