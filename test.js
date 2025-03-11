import needle from 'needle';

/*
needle.get('http://localhost:3000/user', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/members', (err, res) => {
    console.log(res.body);
});
*/

/*
needle.post('http://localhost:3000/remove-user', { stdnum: '8051495845' },
    (err, res) => {
        console.log(res.body);
    }
);

needle.post('http://localhost:3000/remove-all-user',
    (err, res) => {
        console.log(res.body);
    }
);
*/


//sample entries

/*
const newStudent = {
    stdnum: "1234567890",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
};
*/

/*
const newStudent = {
    stdnum: "2094758927",
    fname: "Rein",
    lname: "Ezekiel",
    age: 70
};
*/

/*
const newStudent = {
    stdnum: "8375927485",
    fname: "Rico",
    lname: "Feist",
    age: 20
};
*/


const newStudent = {
    stdnum: "8573648572",
    fname: "Cam",
    lname: "Allen",
    age: 20
};


/*
const newStudent = {
    stdnum: "9835729384",
    fname: "Mary Jane",
    lname: "Watson",
    age: 20
};
*/

needle.post('http://localhost:3000/save-student',
    newStudent,
    (err, res) => {
        console.log(res.body);
    }
);
