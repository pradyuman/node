//readline allows you to interact with the command line
var readline = require("readline");
	//Creating readline to interface with command line
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("-> ");
rl.prompt();

var list = [];

var commands = {
	ls:function() {
		console.log(list);	
	},
	add:function(item){
		list.push(item);	
	},
	remove:function(item){
		list.splice(list.indexOf(item),1);
	},
	clear:function(){
		list.splice(0);
	}
};

//When user enters line, do function
rl.on('line', function(line) {
	//Split line by ' '
	var input = line.split(' ');
	//Take first input as command
	var command = input.shift();
	//Join input into string again
	var parseInput = input.join(' ');

	commands[command](parseInput);

	rl.prompt();
});
