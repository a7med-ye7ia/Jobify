/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express.Router();

const {newJob,deletejobs,getAllJobs,updatejob,getJob}=require('../controllers/jobControlls');

app.route('/addjob').post(newJob);
app.route('/deletejobs/:id').delete(deletejobs);
app.route('/getjobs').get(getAllJobs);
app.route('/updatejob/:id').put(updatejob);
app.route('/getJob/:id').get(getJob);

module.exports = app;