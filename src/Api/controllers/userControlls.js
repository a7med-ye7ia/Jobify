/* eslint-disable no-undef */
const userModel = require('../Models/user.models');
const userUpdate = async (req,res)=>{
    try {
        const id = req.params.id;
        const  user = await userModel.findByIdAndUpdate(id, req.body);
        if(!user){
            res.status(404).send('user not found');
        }
        res.status(200).send('user updated successfully');
    } catch (error) {
        res.status(500).json(error.errmsg);
    }
}

const getUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const  user = await userModel.findById(id);
        if(!user){
            res.status(404).send('user not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json(error.errmsg);
    }
}

module.exports = {userUpdate,getUser};