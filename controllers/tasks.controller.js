const createError = require('http-errors');
const { TaskDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const {
    query: { page, results },
  } = req;
  const tasks = TaskDB.getTasks(page, results);
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createTask = TaskDB.createTask(body);
  res.status(201).send(createTask);
};

module.exports.getTaskById = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const foundTask = TaskDB.getTaskById(id);
  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  next(createError(404, 'Task Not Found'));
};

module.exports.updateTaskById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedTask = TaskDB.updateTask(id, body);
  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  next(createError(404, 'Task Not Found'));
};

module.exports.deleteTaskById = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const deleteTask = TaskDB.deleteTask(id);
  if (deleteTask) {
    return res.status(204).send();
  }
  next(createError(404, 'Task Not Found'));
};
