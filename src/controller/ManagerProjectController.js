const fs = require('fs');
const path = require('path');
const pathDir = path.resolve('database');

module.exports = {
  buildingProjectFileName(projectName) {
    const name = projectName
      .toLowerCase()
      .replace(' ', '-')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return `${name}.json`;

  },

  checkingProjectName(fileName) {
    const fileList = this.getAllProjectsName();
    return fileList.includes(`${fileName}`);
  },

  getAllProjectsName() {
    return fs.readdirSync(`${pathDir}`)
  },

  createProjectFile(project) {
    fs.writeFileSync(`${pathDir}/${project.file}`, JSON.stringify(project));
  },

  getProjectInfo(fileName) {
    return fs.readFileSync(`${pathDir}/${fileName}`, 'utf-8');
  }
};