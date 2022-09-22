const express = require('express');
const users = require('models/Users');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allUsers = await users.findAll();
  res.render('users/', { 
    title: 'Users',
    users: allUsers
  });
});

router.get('/:id', async (req, res) => {
  const user = await users.findOne({
    where: { id: req.params.id }
  });

  res.render('users/user', {
    'first_name': user.first_name,
    'last_name': user.last_name,
    'email': user.email,
    'gender': user.gender
  })
})

module.exports = router;
