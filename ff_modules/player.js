// player.js
var exports = module.exports = {};

//Use python shell
var pythonShell = require('python-shell');
var pyshell = new pythonShell('./pyScripts/player.py');

var player

exports.name = function(playerName) {
	
	console.log('getting the player from player module');
	
	var options = {
		    mode: 'text',
		    args: [playerName]
		};
	
	console.log('Arguments passed to python: ' + options.args)
	
	pythonShell.run('./pyScripts/player.py', options, function (err, results) {
	    if (err) throw err;
	    // results is an array consisting of messages collected during execution
	    console.log(results);
	    player = results;
	});
	
	return player;
};