const express = require("express");
const controller = express.Router();

const studentData = require("../studentData.json");

controller.get("/", (req, res) => {
    // how do I handle a query string?
    let { limit=25, min, max } = req.query; // "10"
    limit = Number(limit); // 10

    // how do I change the student data according to the limit?
    let studentDataForDelivery = {...studentData};
    
    studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit);

    res.json(studentDataForDelivery)

    // // SELECT * FROM students 
    // if(!min && !max) {
    //     // SELECT * FROM students LIMIT $1, [limit]

    // } else {
    //     // SELECT * FROM students LIMIT id>= $1 AND id <= $2 LIMIT $3, [min, max, limit]

    // }

})

// Write a route that accepts a student id as a part of the path
// returning an object (JSON), representing the student with that id

controller.get("/:id", (req,res) => {
    try {
        const studentId = req.params.id;

        // if(!/[0-9]/.test(studentId)) {
        // OR
        if(isNaN(studentId)) {
            res.send("Sutdent id must be a number.")
            return;
        }

        const singleStudent = studentData.students.find(student => student.id === studentId);
        
        if(singleStudent) {
            res.json(singleStudent);
        } else {
            res.send("Student not found");
        }
    } catch (err) {
        res.status(500).send("An error occurred.")
    }
})

module.exports = controller;