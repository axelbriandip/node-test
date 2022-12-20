const express = require('express');

const app = express();

app.get('/players', (req, res) => {
    res.status(200).send({
        msg: 'hola mundo'
    })
})

const PORT = 3977;

app.listen(PORT, () => {
    console.log(`your server is running in port ${PORT}`);
})