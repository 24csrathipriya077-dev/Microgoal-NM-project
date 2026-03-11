const Task = require("../models/Task");

exports.createTask = async (req, res) => {

  const task = await Task.create({
    taskName: req.body.taskName,
    owner: req.user
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {

  const tasks = await Task.find({ owner: req.user });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(task);
};

exports.deleteTask = async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Task deleted successfully" });
};