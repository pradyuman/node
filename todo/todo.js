//readline allows you to interact with the command line
var readline = require("readline");
	//Creating readline to interface with command line
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("$$ ");
rl.prompt();

