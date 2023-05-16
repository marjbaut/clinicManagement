const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
  res.render('home', {
    title: 'My Website',
    message: 'Welcome to my website!'
  });
});

module.exports = router;
