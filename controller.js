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



const saveStudent = async (req, res) => {
    //putting instance inside will catch the error, if there are any
    try {
        const { stdnum, fname, lname, age } = req.body;

        if (stdnum, fname, lname, age) {
            const newStudent = new Student({ stdnum, fname, lname, age });
            await newStudent.save();
            res.send({ inserted: true });
        } else {
            res.send({ inserted: false });
        }
    } catch (error) {
        res.send({ inserted: false });
    }
}

const updateUser = async (req, res) => {
    try {
        const { fname, fnameNew, lnameNew } = req.body;

        if (fname, fnameNew, lnameNew) {
            const update = await Student.updateOne({ fname }, { $set: { fname: fnameNew, lname: lnameNew } });
            res.send({ updated: true });
        } else {
            res.send({ updated: false });
        }
    } catch (error) {
        res.send({ updated: false });
    }
}

export { homepage, User, Members, removeUser, removeAll, saveStudent, updateUser }