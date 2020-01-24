const express = require('express');
const router = express.Router();

router.post('/create',(req,res) => {
    const {body} = req;
    res.send(body);
});

module.exports = router;