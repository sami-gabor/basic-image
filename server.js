const app = require('express')();

app.get('/', (req, res) => {
    res.send('Express has dockerized!');
})

app.listen(3030);
