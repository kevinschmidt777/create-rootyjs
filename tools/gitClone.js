const clone = require('git-clone');

module.exports = {
	getLatestRootyJs: (targetPath) => {
		return new Promise((resolve, reject) => {
			clone('https://github.com/kevinschmidt777/rootyjs.git', targetPath, {}, (err) => {
				if (err) reject(err);
				resolve(true);
			});
		});
	},
};
