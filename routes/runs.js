const express = require('express');
const Runs = require('models/Run');
const Users = require('models/User');
const router = express.Router();

// GET available Runs page
router.get('/', async function(req, res, next) {
    const run = await Runs.findAll();
    res.render('runs/', { 
        title: 'Available Runs',
        runList: run
    });
});

router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const run = await Runs.findOne({
        where: { id: requestedId },
        include: [{model: Users, as: 'users'}]
    });
    
    res.render('runs/run', {
        date: run.date,
        name: run.name,
        run_type: run.run_type,
        city: run.city,
        state: run.state,
        url: run.url,
        user: run.users,
        id: req.params.id
    });
});

module.exports = router;