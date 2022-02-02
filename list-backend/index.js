const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('did this work');
})

app.listen(3000, () => {
    console.log('work pls');
})