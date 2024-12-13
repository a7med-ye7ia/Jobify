/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express.Router();

const {getAllUsers,deleteUser}=require('../controllers/adminControlls');
const {getAllJobs} = require('../controllers/jobControlls');

app.route('/AllUsers').get(getAllUsers);
app.route('/AllJobs').get(getAllJobs);
app.route('/delete/:id').delete(deleteUser);


module.exports = app;