#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('./tools/inputPromt');
const gitClone = require('./tools/gitClone');
const editPackageJson = require('./tools/editPackageJson');
const removeFolders = require('./tools/removeFolders');

const run = async () => {
	// First ask for project settings.
	const settings = await inquirer.askProjectSettings();
	const projectPath = './' + settings.name;

	// Generate new project folder
	if (fs.existsSync(projectPath)) {
		console.log(
			'Folder ' +
				projectPath +
				' already exists. Not able to generate a new RootyJS project into an existing directory.'
		);
		process.exit();
	}

	// Get latest version of RootyJS from git repository and clone into new folder (based on project name given).
	console.log(
		'\x1b[36m',
		'⏳',
		'\x1b[0m',
		'Alright, pulling the latest RootyJS version from git repository. Please wait a moment...'
	);
	await gitClone.getLatestRootyJs(projectPath);

	// Edit package.json and replace values with given options for new project.
	console.log('\x1b[36m', '✏', '\x1b[0m', 'Updating package.json values...');
	await editPackageJson.rewrite(projectPath, settings);

	// Remove .git folder from new project.
	console.log('\x1b[36m', '✂', '\x1b[0m', 'Removing dev git folders...');
	await removeFolders.removeDevFolders(projectPath);

	// Finished!
	console.log(
		'\x1b[1m',
		'✅',
		'\x1b[32m',
		'Yay! Your new RootyJS project "' + settings.name + '" is ready for you. Happy coding!',
		'\x1b[0m'
	);
	console.log('Please visit https://rootyjs.com for further informations and detailed documentation.');
};

run();
