/* eslint-disable no-undef */
const userModel = require('../Models/user.models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken'); 


const newUser = async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body;

    if (!username) {
        return res.status(400).send("Please provide a username!");
    }
    if (!firstname || !lastname) {
        return res.status(400).send("Please provide the full name!");
    }
    if (!email) {
        return res.status(400).send("Please provide the email!");
    }
    if (!password) {
        return res.status(400).send("Please provide the password!");
    }

    // validation checks for username and password
    const usernameValidation = /^[a-zA-Z0-9]+$/;
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!usernameValidation.test(username)) {
        return res.status(400).send("Username can only contain alphanumeric characters and must be between 3-20 characters.");
    }
    if (!passwordValidation.test(password)) {
        return res.status(400).send("Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.");
    }

    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const user = new userModel(req.body);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        res.status(201).send({ msg: "Registered successfully", user });
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Find user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                id: user._id, 
                email: user.email 
            }, 
            'YOUR_SECRET_KEY',
            { expiresIn: '1h' }
        );

        // Send response
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: "Server error during login",
            error: error.message 
        });
    }
};

module.exports = {newUser,login};