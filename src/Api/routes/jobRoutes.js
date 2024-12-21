/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');
const app = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const {newJob,deletejobs,getAllJobs,updatejob,getJob}=require('../controllers/jobControlls');
const {newApplication , ApplicationUpdate} = require('../controllers/applyControll');

const multipleFields = upload.fields([
    { name: 'cv', maxCount: 1 },
]);

2
app.route('/addjob').post(newJob);
app.route('/deletejobs/:id').delete(deletejobs);
app.route('/getjobs').get(getAllJobs);
app.route('/updatejob/:id').put(updatejob);
app.route('/getJob/:id').get(getJob);
app.route('/application').post(multipleFields,newApplication);
app.route('applicationUpdate').put(multipleFields,ApplicationUpdate)

module.exports = app;