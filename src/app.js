const express = require('express');
const cors = require('cors');

const route = require('./routes/routes');
const projectRoute = require('./routes/projectRoute');
const cardRoute = require('./routes/cardRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use(route);
app.use('/createProject', projectRoute);
app.use('/project', cardRoute);

module.exports = app;