const projectRoute = require('express').Router();
const newProject = require('../controller/CreateProjectController');

projectRoute.post('/', newProject.creatingNewProject);

module.exports = projectRoute;