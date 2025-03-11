//html body

import mongoose from "mongoose";

await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase');

const Student = mongoose.model('StudentDatabase', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, 'studentData');

const homepage = (req, res) => {
    res.send('Welcome to the Homepage');
}

const User = async (req, res) => {
    res.send(await Student.find({ stdnum: req.query.stdnum }));
}

const Members = async (req, res) => {
    //print all info or empty array
    const students = await Student.find({});

    if (students.length > 0) {
        res.json(students);
    } else {
        res.json([]);
    }
}

export { homepage, User, Members }