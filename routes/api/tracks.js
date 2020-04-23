const express = require('express');
const router = express.Router();
const getTracks = require('../../data/getTracks');

router.get('/', async function(req, res, next) {
    try {
        const data = await getTracks();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.send(500).send("Internal Server Issue, check logs");
    };
});

module.exports = router;