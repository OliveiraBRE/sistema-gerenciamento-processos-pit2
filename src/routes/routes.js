const route = require('express').Router();
const ProjetcController = require('../controller/ProjectController');

route.get('/', (_, res) => res.send("It works"));
route.get('/projects', ProjetcController.getAllProjects);

module.exports = route;