const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const { tasksRouter } = require('./Tasks/TasksRoute.router');

app.use(cors());
app.use(bodyParser.json())

app.use("", tasksRouter);

app.use("/", (req, res) => {
    return res.json({
        message: 'Hello World!'
    })
})

module.exports = {
    app
}