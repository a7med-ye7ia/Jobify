/* eslint-disable no-undef */
const userModel = require('../Models/user.models');
const bcrypt = require('bcrypt')

const newUser = async (req,res)=>{
        const { firstname, lastname,email,password } = req.body;
        if(!firstname || !lastname)
        {
            return res.send("Please provide the full Name!").status(400);
        }
        if(!email)
        {
            return res.send("Please provide the E-mail!").status(400);
        }
        if(!password)
        {
            return res.send("Please provide the Password!").status(400);
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.send("User already exists!").status(400);
        }
        const user = await userModel.create(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);    
        await user.save();
        res.send({msg:'Registered successfully',user}).status(201);
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email)
    {
        return res.send("Please provide the E-mail!").status(400);
    }
    if(!password)
    {
        return res.send("Please provide the Password!").status(400);
    }
    const user = await userModel.findOne({email});
    if(!user){
        return res.send("User doesn't exist, Please try signing up!").status(404);
    }
 
    const isMatch =await bcrypt.compare(password , user.password);    ;
    if(!isMatch)
    {
        return res.send("Incorrect Password!").status(404);
    }
    res.json({msg:'Login successful',user}).status(200);
}

module.exports = {newUser,login};