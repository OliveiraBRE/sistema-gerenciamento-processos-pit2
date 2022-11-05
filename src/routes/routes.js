const route = require('express').Router();

route.get('/', (_, res) => res.send("It works"));

module.exports = route;