var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser')

require('./models/todo')

var	todoController = require('./controllers/todo');

mongoose.connect('mongodb://localhost/mongoToDo')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');

app.get('/',todoController.index);
app.post('/',todoController.create);
app.put('/:todoID',todoController.update);
app.post('/delete',todoController.delete);

app.listen(port,function(err) {
	console.log('listening on %s',port);
});
