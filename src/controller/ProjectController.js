const projectManager = require('./ManagerProjectController');

module.exports = {
  getAllProjects(_, res){
    const projects = projectManager.getAllProjects();

    const projectsNames = projects.map(file => {
      const projectInfo = projectManager.getProjectInfo(file);

      const {id, name: projectName} = JSON.parse(projectInfo);
      return {id, projectName};
    });

    res.json(projectsNames.sort((a, b) => {
      return a.id -b.id;
    }));
  }
}