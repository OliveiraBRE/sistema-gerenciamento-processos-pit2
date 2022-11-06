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

  getCards(fileName) {
    const project = projectManager.getProjectInfo(fileName);
    return JSON.parse(project);
  },

  // updateProject(project) {
  //   projectManager.createProjectFile(project);
  // },

  updateCardProject(project) {
    const { projectName, id, cardStatus } = project;

    const currentProject = this.getCards(`${projectName}.json`);
    const [targetCard] = currentProject.cards.filter(card => {
      if (card.cardId === Number(id)) {
        return card;
      }
    });

    targetCard.status = cardStatus;
    projectManager.createProjectFile(currentProject);
  }
}