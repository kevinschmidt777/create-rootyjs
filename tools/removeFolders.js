const fs = require("fs");

module.exports = {
  removeDevFolders: (projectPath) => {
    return new Promise((resolve, reject) => {
      fs.rm(projectPath + "/.git", { recursive: true }, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  },
};
