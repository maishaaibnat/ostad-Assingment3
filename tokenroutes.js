const express = require('express');
const router = express.Router();
const { createToken } = require('../controllers/tokenController');

router.get('/token', createToken);

module.exports = router;
