var express = require('express'),
	app = express(),
	posts = require('controllers/articles');

var data = [];
var notImplemented = function(req,res) {
	res.sendStatus(501);
}

//post functions
/*
  a post will be like this:
  {
  	title:"",
	body:"",
	author:"",
	comments:[]
  }
 */
app.get('/posts', notImplemented); //show all blog posts
app.get('/posts/:postID', notImplemented); //read a post
app.get('/posts/new', notImplemented); //display a form to create a post
app.post('/posts', notImplemented); //make a new post
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
