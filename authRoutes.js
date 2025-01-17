const express = require('express');
const router = express.Router();
const { postBody } = require('../controllers/authController');

router.post('/postbody', postBody);

module.exports = router;
