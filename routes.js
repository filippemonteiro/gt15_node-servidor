const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.get('/features', (req, res) => {
  res.send('Features Page');
});

router.get('/contact', (req, res) => {
  res.send('Contact Page');
});

module.exports = router;