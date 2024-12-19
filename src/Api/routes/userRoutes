/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const app = express.Router();

const {userUpdate,getUser}=require('../controllers/userControlls');

app.route('/userUpdate/:id').put(userUpdate);
app.route('/getUser/:id').get(getUser);


module.exports = app;