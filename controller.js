//html body
//based from the sample in the instructions
//for the queries

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

//remove user by stdnum
const removeUser = async (req, res) => {
    res.send(await Student.deleteOne({ stdnum: req.body.stdnum }));
}

//check the return object of the model (acknowledge/deleteCount)
const removeAll = async (req, res) => {
    const students = await Student.deleteMany({});

    if (students.acknowledged) {
        res.send({ deleted: true | students.deletedCount });
    } else {
        res.send({ deleted: false });
    }
}

export { homepage, User, Members, removeUser, removeAll }