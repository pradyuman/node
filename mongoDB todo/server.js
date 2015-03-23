var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose');

require('./models/todo')

var	todoController = require('./controllers/todo');


mongoose.connect('mongodb://localhost/mongoToDo')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.set('view engine','ejs');

app.get('/',todoController.index);
app.post('/',todoController.create);
app.put('/:todoId',todoController.update);
app.del('/:todoId',todoController.delete);

app.listen(port,function(err) {
	console.log('listening on %s',port);
});
