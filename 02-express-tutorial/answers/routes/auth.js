'use strict';

const express = require('express'),
  router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send('Please provide credentials.')
  // console.log(req.body);
  // res.send('post');
  // try to access res.body before json method
});

module.exports = router;