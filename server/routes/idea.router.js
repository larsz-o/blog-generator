const express = require('express');
const router = express.Router(); 
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('in post route')
    const idea = req.body; 
    const query = `INSERT INTO "ideas" ("description") VALUES ($1);`;
    pool.query(query, [idea.idea]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error posting idea', error);
    })
})

module.exports = router; 