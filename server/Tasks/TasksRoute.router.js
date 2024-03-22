const tasksRouter = require('express').Router();

const { getTasks, addTask } = require('./Tasks.controller');

tasksRouter.get("/tasks", getTasks);
tasksRouter.post("/tasks", addTask);

module.exports = {
    tasksRouter
}