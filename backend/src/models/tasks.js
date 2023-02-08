const mongoose = require('mongoose');

const { Schema } = mongoose;

const tasksSchema = new Schema({
  _id: Number,
  task: String,
}, { timestamps: true, _id: false });

const Task = mongoose.model('Task', tasksSchema);

module.exports = Task;
