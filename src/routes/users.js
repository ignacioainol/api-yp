const express = require('express');
const router = express.Router();

router.post('/create',(req,res) => {
    const {name, lastname, email,phonenumber} = req.body;
    
});

module.exports = router;