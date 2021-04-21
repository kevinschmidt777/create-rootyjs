const inquirer = require('inquirer');

module.exports = {
	askProjectSettings: () => {
		const questions = [
			{
				name: 'name',
				type: 'input',
				message: 'Enter the project name:',
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return 'Please enter a project name.';
					}
				},
			},
			{
				name: 'author',
				type: 'input',
				message: 'Author of your project:',
				validate: (value) => {
					if (value.length) {
						return true;
					} else {
						return 'Please define a author for your project.';
					}
				},
			},
			{
				name: 'description',
				type: 'input',
				message: 'Description of your project (optional):',
			},
		];
		return inquirer.prompt(questions);
	},
};
