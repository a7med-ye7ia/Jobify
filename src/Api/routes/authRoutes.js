/* eslint-disable no-undef */
const express = require('express');
const app = express.Router();
const {newUser,login} = require('../controllers/authControlls');

app.route('/register').post(newUser);

app.route('/login').post(login)

module.exports = app;
