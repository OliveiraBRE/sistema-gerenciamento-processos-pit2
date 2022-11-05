const createProjectRoute = require('express').Router();
const newProject = require('../controller/CreateProjectController');

createProjectRoute.post('/', newProject.creatingNewProject);

module.exports = createProjectRoute;