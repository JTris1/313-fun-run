const express = require('express');
const router = express.Router();

// GET available Runs page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Available Runs' });
});

module.exports = router;