const StudentModel = require("../models/StudentModel");

// Create Student

exports.createStudent = async (req, res) => {
    let reqBody = req.body;
    try {
        let result = await StudentModel.create(reqBody);
        res.status(200).json({ status: "student created", data: result })
    }
    catch (e) {
        res.status(402).json({ status: "Something is wrong!", data: e })
    }
}

exports.getStudents = async (req, res) => {

    try {

        let students = await StudentModel.find({})
        res.status(200).json(students)



    } catch (error) {
        res.status(402).json({ status: "Something is wrong" })
        console.log(error)
    }

}


exports.deleteStudent = async (req, res) => {
    let id = req.params.id;
    try {
        let result = await StudentModel.findOneAndDelete({ _id: id })
        res.status(200).json({ status: "student deleted", data: result })
    }
    catch (e) {
        res.status(402).json({ status: "Something is wrong!", data: e })
    }
}


exports.updateStudent = async (req, res) => {
    let id = req.params.id;
    let updatedData = req.body
    try {
        let result = await StudentModel.findByIdAndUpdate(id, updatedData)
        res.status(200).json({ status: "Student data updated", data: result })
    }
    catch (e) {
        res.status(402).json({ status: "Something is wrong!", data: e })
    }
}


exports.getStudentById = async (req, res) => {

    let id = req.params.id

    try {
        let students = await StudentModel.findById(id)
        res.status(200).json(students)



    } catch (error) {
        res.status(402).json({ status: "Something is wrong" })
        console.log(error)
    }

}