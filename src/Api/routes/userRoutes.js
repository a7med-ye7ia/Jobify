/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const multer = require('multer');

const app = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const multipleFields = upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'coverPic', maxCount: 1 },
]);

const {userUpdate,getUser}=require('../controllers/userControlls');

app.route('/userUpdate/:id').put(multipleFields,userUpdate);
app.route('/getUser/:id').get(getUser);


module.exports = app;