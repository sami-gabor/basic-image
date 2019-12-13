const app = require('express')();

app.get('/', (req, res) => {
    res.send('Simplest express server ready to be dockerized!');
})

app.listen(3030);
