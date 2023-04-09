const mongoose = require('mongoose')

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [emailRegex, "Invalid email format"]
      },
    gender: {
        type: String,
        required: true,
        enum: {
            values: ['Male','Gender','Other'],
            message: "Gender must be Male, Female, or Other."
        }
    },
    salary: {
        type: Number,
        required: true
    }
})

const employess = mongoose.model('Employees',employeeSchema)

module.exports = employess