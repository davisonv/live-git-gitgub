const express = require('express');

const app = express()

app.get('/teste',(req, res) => {
    return res.json({ hello: 'wolrd' })
} )

app.listen(3333);