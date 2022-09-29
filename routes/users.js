const express = require('express');
const Users = require('models/User');
const Runs = require('models/Run');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allUsers = await Users.findAll();
  res.render('users/', { 
    title: 'Users',
    users: allUsers
  });
});

router.get('/:id', async (req, res) => {
  const user = await Users.findOne({
    where: { id: req.params.id },
    include: [{model: Runs, as: 'runs'}]
  });

  res.render('users/user', {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    gender: user.gender,
    run: user.runs,
    id: req.params.id
  })
})

module.exports = router;
