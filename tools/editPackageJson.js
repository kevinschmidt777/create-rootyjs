const fs = require('fs');

module.exports = {
	rewrite: (projectPath, settings) => {
		fs.readFile(projectPath + '/package.json', 'utf-8', (err, data) => {
			if (err) throw err;

			// Parse JSON Object from package.json
			const packageJson = JSON.parse(data);

			// Replace values in package.json
			packageJson.name = settings.name;
			packageJson.description = settings.description;
			packageJson.homepage = '';
			packageJson.author = settings.author;
			packageJson.keywords = [];

			// Remove some values from object.
			delete packageJson.repository;
			delete packageJson.bugs;

			// Stringify back
			const finalPackageJson = JSON.stringify(packageJson, null, 4);

			// Overwrite file.
			fs.writeFile(projectPath + '/package.json', finalPackageJson, 'utf-8', (error) => {
				if (error) throw error;
			});
		});
	},
};
