const fs = require('fs');
const path = require('path');
const pathDir = path.resolve('database');

module.exports = {
  buildingProjectFileName(projectName) {
    const name = projectName
      .toLowerCase()
      .replaceAll(' ', '-')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return `${name}.json`;

  },

  checkingProjectName(fileName) {
    const fileList = this.getAllProjects();
    return fileList.includes(`${fileName}`);
  },

  getAllProjects() {
    return fs.readdirSync(`${pathDir}`)
  },

  createProjectFile(project) {
    fs.writeFileSync(`${pathDir}/${project.file}`, JSON.stringify(project, null, 2));
  },

  getProjectInfo(fileName) {
    return fs.readFileSync(`${pathDir}/${fileName}`, 'utf-8');
  }
};