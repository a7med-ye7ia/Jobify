const mongoose = require('mongoose');

// Define the schema
const ApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'] // Email validation
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10,15}$/, 'Phone number must be valid'] // Validates phone numbers between 10-15 digits
    },
    cv: {
        type: Buffer,
<<<<<<< HEAD
        required: false,
    },
    coverLetters: [{
        title: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: false
        },
        submittedAt: {
            type: Date,
            default: Date.now
        }
    }]
=======
    },
    coverLetters: {type : String}
>>>>>>> Adham
}, {
    timestamps: true 
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;
