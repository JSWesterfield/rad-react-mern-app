const express = require('express');

const app = express();

const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://localhost:27017/lists', { useUnifiedTopology: true }, async function (err, client) {
    if (err) throw err

    db = client.db('lists');
    await db.collection('lists').insertMany([
        { done: true, desc: 'write code' },
        { done: true, desc: 'fix bugs' },
        { done: true, desc: 'profit' },
    ]);

})

app.get('/', (req, res) => {
    res.json('did this work');
})

app.get('/lists', async (req, res) => {
    const lists = await db.collection('lists').find().toArray();
    res.json(lists);
})

app.listen(3001, () => {
    console.log('work pls');
})