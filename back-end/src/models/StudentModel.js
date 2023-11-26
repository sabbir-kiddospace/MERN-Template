const mongoose = require('mongoose')
const StudentsSchema = mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        gender: { type: String },
        dateOfBirth: { type: String },
        nationality: { type: String },
        address: { type: String },
        email: { type: String },
        phone: { type: String },
        admissionDate: { type: String },
        courses: { type: String },

    },
    { timestamps: true, versionKey: false }
)
const StudentModel = mongoose.model('students', StudentsSchema);
module.exports = StudentModel;