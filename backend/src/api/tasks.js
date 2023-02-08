const express = require('express');

const Task = require('../models/tasks');

const router = express.Router();

router.get('/', (req, res) => {
  Task.find().sort({ _id: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

router.route('/create').post((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  const newTask = new Task(req.body);
  newTask.save();
  res.send(newTask);
});

router.delete('/:id', (req, res, next) => {
  Task.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    }).catch((err) => next(err));
});

module.exports = router;
