const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    employeeType: {
        type: String,
        required: true,
        enum: ['Full-time', 'Part-time', 'Contract', 'Intern']
    },
    department: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    joiningDate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);
