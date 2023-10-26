const express = require('express');
const router = express.Router();

const {
    logOn,
    logOff,
    testAuth
} = require('../controllers/auth');

const { auth } = require('../middleware/auth');

router.get('/test', auth, testAuth);
router.post('/logon', logOn);
router.delete('/logoff', logOff);

module.exports = router;

