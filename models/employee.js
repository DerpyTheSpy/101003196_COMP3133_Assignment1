const mongoose = require('mongoose');

//Employee Schema model

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        trim: true,
        required: true,
        lowercase: true
    },
    salary: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Salary must be a positive number');
            }
        }
    },
    created: {
        type: Date,
        default: Date.now
    },
    updatedat: {
        type: Date,
        default: Date.now
    }
});


const Employee = mongoose.model('employee', employeeSchema);