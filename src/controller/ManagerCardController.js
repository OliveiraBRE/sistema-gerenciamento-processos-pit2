const projectManager = require('./ManagerProjectController');

module.exports = {
  getFileName(name) {
    const projectName = projectManager.buildingProjectFileName(name);
    
    const projects = projectManager.getAllProjects();
    const filteredProject = projects.filter(project => {
      return project === projectName;
    });
    
    return filteredProject[0];
  },

  getCards(fileName){
    const project = projectManager.getProjectInfo(fileName);
    return JSON.parse(project);
  },

  setNewCard(project) {
    projectManager.createProjectFile(project);
  }
}