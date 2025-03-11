import needle from 'needle';

needle.get('http://localhost:3000/user', (err, res) => {
    console.log(res.body);
});