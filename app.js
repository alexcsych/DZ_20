const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: 0,
    name: 'Task1',
    createdAt: '2000-12-01',
    isDone: true,
  },
  {
    id: 1,
    name: 'Task2',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
];
class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      id: uuidv4(),
      isDone: false,
      createdAt: format(new Date(), 'Y-MM-dd'),
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }
}

const tasksDbInstace = new TasksDB(tasksDB);
const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => {
  const tasks = tasksDbInstace.getTasks();
  res.status(200).send(tasks);
});
app.post('/tasks', (req, res) => {
  const createTask = tasksDbInstace.createTask(req.body);
  res.status(201).send(createTask);
});

module.exports = app;
