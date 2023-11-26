const express=require('express');
const { createStudent, getStudents, deleteStudent, updateStudent, getStudentById } = require('../controller/StudentController');
const router=express.Router();





router.post("/create-student",createStudent);
router.get("/students", getStudents)
router.delete("/delete-student/:id", deleteStudent)
router.put("/update-student/:id", updateStudent)
router.get("/student/:id", getStudentById)



module.exports=router;