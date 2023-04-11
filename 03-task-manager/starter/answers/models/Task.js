'use strict';

const mongoose = require('mongoose'),
  TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
  });

  module.exports = mongoose.model('Task', TaskSchema);