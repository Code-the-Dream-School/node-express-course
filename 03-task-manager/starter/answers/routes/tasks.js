'use strict';

const express = require('express'),
  router = express.Router(),
  { getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
  } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;