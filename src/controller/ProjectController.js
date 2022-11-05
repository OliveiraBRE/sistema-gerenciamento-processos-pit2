const manager = require('./ManagerProjectController');

module.exports = {
  getAllProjects(_, res){
    const projects = manager.getAllProjectsName();

    const projectsNames = projects.map(file => {
      const projectInfo = manager.getProjectInfo(file);

      const {id, name: projectName} = JSON.parse(projectInfo);
      return {id, projectName};
    });

    res.send(projectsNames.sort((a, b) => {
      return a.id -b.id;
    }));
  }
}