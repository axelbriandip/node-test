const express = require('express');

const app = express();

const PORT = 3977;

app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'hola mundo'
    })
})

app.listen(PORT, () => {
    console.log(`your server is running in port ${PORT}`);
})