/* eslint-disable no-undef */
const express = require('express')
const cors = require("cors");
const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Database
const connectDB = require('./db/connect');


// connection port
const PORT = 3000;

// routes import
const authRoutes = require('./routes/authRoutes');
const jobRoutes=require('./routes/jobRoutes');
const userRoutes= require('./routes/userRoutes');
const adminRoutes= require('./routes/adminRoutes');
// routes
app.use('/auth', authRoutes);
app.use('/job', jobRoutes);
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);

const start = async () => {
    try {
        await connectDB("mongodb+srv://ADMIN:ADMIN@cluster0.zi7bt.mongodb.net/DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}


start();
