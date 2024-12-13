/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jobModel = require('../Models/job.models')
const newJob = async (req, res) => {
    try {
        const { title, position, description } = req.body;
        if (!title || !position || !description) {
            return res.status(400).send("All fields are required: title, position, description");
        }
        const job = await jobModel.create(req.body);
        res.status(201).send({ msg: 'Job added successfully', job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllJobs = async (req,res) => {
    const jobs = await jobModel.find({});
    res.send(jobs).status(200);
}
//delete a job from the database by its id
const deletejobs = async (req,res) => {
     try {
         const {id} = req.params;
         const job = await jobModel.findByIdAndDelete(id);
         if(!job){
             return res.status(404).json({message: `cannot find any jobs with ID ${id}`})
         }
         res.status(200).json(job);

     } catch (error) {
         res.status(500).json({message: error.message})
     }
}
 //update a job by its id
 const updatejob =async (req, res) => {
    const id = req.params.id;
    const  job= await jobModel.findByIdAndUpdate(id, req.body);
    if(!job){
        res.status(404).send('job not found');
    }
    res.status(200).send('job updated successfully');
 }

 const getJob = async (req,res)=>{
    try {
        const id = req.params.id;
        const  job = await jobModel.findById(id);
        if(!job){
            res.status(404).send('Job not found');
        }
        res.status(200).send(job);
    } catch (error) {
        res.status(500).json(error.errmsg);
    }
}
module.exports = {newJob,getAllJobs,deletejobs,updatejob,getJob};