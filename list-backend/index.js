const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/lists', function (err, client) {
    if (err) throw err

    var db = client.db('lists')

})

app.get('/', (req, res) => {
    res.json('did this work');
})

app.listen(3000, () => {
    console.log('work pls');
})