const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Server is currently running.");
});

module.exports = router;