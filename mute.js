var child_process = require('child_process');
var prompt = require('prompt-sync')();

var remains = 0;
while (isNaN(remains) || remains <= 0) {
	remains = parseFloat(prompt('How many time to spend (in minutes)? '));
	if (isNaN(remains) || remains <= 0) {
		console.log('Wrong input. Try again.');
	}
}

console.log('Waiting ' + remains + ' minutes...');

setTimeout(function () {
	child_process.execSync('nircmd.exe mutesysvolume 1');
}, remains * 60 * 1000);