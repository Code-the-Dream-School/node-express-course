'use strict';

const express = require('express'),
  app = express(),
  people = require('./routes/people'),
  auth = require('./routes/auth');

app.set('port', process.env.PORT || 5000);

// static assets
app.use(express.static('../methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/people', people);

app.use('/login', auth);

app.listen(app.get('port'), () => {
  console.log(`Server listening on http://localhost:${app.get('port')}`);
});
