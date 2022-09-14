const express = require('express');
const runs = require('models/Run.js');
const router = express.Router();

// GET available Runs page
router.get('/', async function(req, res, next) {
    const run = await runs.findAll();
    res.render('runs', { 
        date: run.date,
        name: run.name,
        run_type: run.run_type,
        url: run.url,
        city: run.city,
        state: run.state
    });
});

module.exports = router;