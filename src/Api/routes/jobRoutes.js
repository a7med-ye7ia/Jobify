/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express.Router();

const {newJob}=require('../controllers/jobControlls');

app.route('/addjob').post(newJob);
module.exports = app;