const express = require('express');
const users = require('models/Users');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allUsers = await users.findAll();
  res.render('users', { 
    title: 'Users',
    users: allUsers
  });
});

module.exports = router;
