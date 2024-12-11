/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jobModel = require('../Models/job.models')
const newJob = async (req,res)=>{
    const { title,position,description } = req.body;
    if(!title)
    {
        return res.send("Please provide the Job title!").status(400);
    }
    if(!position)
    {
        return res.send("Please provide the position!").status(400);
    }
    if(!description)
    {
        return res.send("Please provide the description!").status(400);
    }
   
    const job = await jobModel.create(req.body);   
    await job.save();
    res.send({msg:'add successfully',job}).status(201);
}
module.exports = {newJob};