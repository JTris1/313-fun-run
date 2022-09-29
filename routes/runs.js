const express = require('express');
const runs = require('models/Run.js');
const registrations = require('models/Registration.js');
const router = express.Router();

// GET available Runs page
router.get('/', async function(req, res, next) {
    const run = await runs.findAll();
    res.render('runs/', { 
        title: 'Available Runs',
        runList: run
    });
});

router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const run = await runs.findOne({
        where: { id: requestedId },
        include: [{model: User, as: 'users'}]
    });
    
    res.render('runs/run', {
        date: run.date,
        name: run.name,
        run_type: run.run_type,
        city: run.city,
        state: run.state,
        url: run.url
    });
});

module.exports = router;