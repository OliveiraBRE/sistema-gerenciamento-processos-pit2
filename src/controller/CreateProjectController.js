const manager = require('./ManagerProjectController');

module.exports = {
  creatingNewProject(req, res) {
    const { name, initDate, deadLine } = req.body;
    const projectName = manager.buildingProjectFileName(name);
    const projectId = manager.getAllProjectsName().length + 1;

    console.log(projectId);

    const project = {
      id: projectId,
      name: name,
      file: projectName,
      init: initDate,
      deadLine: deadLine,
      status: active, /* conclued, deprecated*/
      cards:[]
    };


    if(!manager.checkingProjectName(project.file)) {
      manager.createProjectFile(project);
      res.send("Projeto criado com sucesso");
    } else {
      res.send("Projeto já existe");
    }

  }
}