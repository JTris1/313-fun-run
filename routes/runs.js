const express = require('express');
const runs = require('models/Run.js');
const router = express.Router();

// GET available Runs page
router.get('/', async function(req, res, next) {
    const run = await runs.findAll();
    res.render('runs', { 
        title: 'Available Runs',
        runList: run
    });
});

module.exports = router;