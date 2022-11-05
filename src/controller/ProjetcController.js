const fs = require('fs');
const path = require('path');
const pathDir = path.resolve('database');

module.exports = {
  buildingProjectFileName(projectName) {
    const lowerName = projectName.toLowerCase().split(' ');
    
    const name = lowerName.map(word => {
      const letters = word.split('');
      const firstLetter = letters.shift().toUpperCase();
      const projectName = [firstLetter, ...letters].join('');

      return projectName;
    }).join('');

    return `${name}.json`;

  },

  checkingProjectName(fileName) {
    const fileList = fs.readdirSync(`${pathDir}`);

    return fileList.includes(`${fileName}`);
  },

  createProjectFile(project) {
    fs.writeFileSync(`${pathDir}/${project.file}`, JSON.stringify(project));
  }
};