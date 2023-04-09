const mongoose = require('mongoose');

//Employee Schema model

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});


const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;