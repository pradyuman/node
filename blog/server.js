var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose');

require('./models/user');
require('./models/article');

var	userController = require('./controllers/user');
var	articleController = require('./controllers/article');
var	commentController = require('./controllers/comment');


mongoose.connect('mongodb://localhost/blog')

app.use(express.json());
app.use(express.urlencoded());
app.use(express.logger());
app.set('view engine','ejs');

//Posts
app.get('/articles',articleController.index);
app.get('/articles/:articleId',articleController.view);
app.post('/articles',articleController.create);
app.put('/articles/:articleId',articleController.update);
app.del('/articles/:articleId',articleController.delete);

//Comments
app.post('/articles/:articleId',commentController.create);
app.del('/articles/:articleId/:commentId',commentController.delete);

//Users
app.get('/users',userController.index);
app.post('/users',userController.create);
app.put('/users/:userId',userController.update);
app.del('/users/:userId',userController.delete);

//When express finds an articleID -> load articleController
app.param('articleId',articleController.load);
//When express finds a userID -> load userController
app.param('userId',userController.load);

app.listen(port,function(err) {
	console.log('listening on %s',port);
});
