const express = require('express');
const router = express.Router();

router.use('/',(req, res) => {
    res.send('kkkkk');
})

module.exports = router;