const express = require('express');
const router = express.Router();
const { logon, hello } = require('../controllers/helloController');
const authentication = require('../middleware/auth');

router.post('/logon', logon);
router.get('/hello', authentication, hello);

module.exports = router;