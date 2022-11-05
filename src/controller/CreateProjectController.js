const ph = require('./ProjetcController');

module.exports = {
  creatingNewProject(req, res) {
    const { name, initDate, deadLine } = req.body;
    const projectName = ph.buildingProjectFileName(name);

    const project = {
      name: name,
      file: projectName,
      init: initDate,
      deadLine: deadLine,
      cards:[]
    };


    if(!ph.checkingProjectName(project.file)) {
      ph.createProjectFile(project);
      res.send("Projeto criado com sucesso");
    } else {
      res.send("Projeto já existe");
    }

  }
}