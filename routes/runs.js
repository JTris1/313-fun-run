const express = require('express');
const router = express.Router();

// Get Available Runs page
router.get('/', function(req, res, next) {
    res.render('runs', { title: 'Available Runs' });
});