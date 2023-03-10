const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '0',
    name: 'Task0',
    createdAt: '2000-12-01',
    isDone: true,
  },
  {
    id: '1',
    name: 'Task1',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '2',
    name: 'Task2',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '3',
    name: 'Task3',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '4',
    name: 'Task4',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '5',
    name: 'Task5',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '6',
    name: 'Task6',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '7',
    name: 'Task7',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '8',
    name: 'Task8',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '9',
    name: 'Task9',
    createdAt: format(new Date(), 'Y-MM-dd'),
    isDone: false,
  },
  {
    id: '10',
    name: 'Task10',
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

  getTasks (page = 1, results = 5) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
    }

    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstace = new TasksDB(tasksDB);

module.exports = tasksDbInstace;
