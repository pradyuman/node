var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	posts = require('./controllers/posts');

var notImplemented = function(req,res) {
	res.sendStatus(501);
}

app.use(bodyParser());

//post functions
app.get('/posts', posts.index); //show all blog posts
app.get('/posts/new', posts.new); //display a form to create a post
app.get('/posts/:postID', notImplemented); //read a post
app.post('/posts', posts.create); //make a new post
app.put('/posts/:postID', notImplemented); //update a post
app.delete('/posts/:postID', notImplemented); //delete a post

//comment functions
/*
  a comment will be like this:
  {
  	name:"",
	text:""
  }
 */
app.post('/posts/:postID/comments', notImplemented);
app.delete('/posts/:postID/comments/:commentID', notImplemented);

app.listen(8080);
