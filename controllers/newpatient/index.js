const express = require('express');
const router = express.Router();

// Define the route handler for '/newpatient'
router.get('/', (req, res) => {
  // Your logic for handling the GET request goes here
  res.render('newpatient');
});

module.exports = router;