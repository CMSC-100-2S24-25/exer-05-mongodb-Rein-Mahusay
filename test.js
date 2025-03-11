import needle from 'needle';

needle.get('http://localhost:3000/user', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/members', (err, res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/remove-user', { stdnum: '8051495845' }, (err, res) => {
    console.log(res.body);
});
