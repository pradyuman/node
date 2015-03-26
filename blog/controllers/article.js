var mongoose = require('mongoose'),
	Article = mongoose.model('article'),
	User = mongoose.model('user'),
	controller = {};

controller.load = function(req,res,next,id) {
	Article.findById(id).populate('user').populate('comments.user').exec(function(err,article) {
		if(err) return next(err);
		if(!article) return res.send(404);
		req.article = article;
		next();
	});
}

var loadAllUsers = function(req,res,next) {
	User.find({},function(err,users) {
		if(err) return next(err);
		req.users = users;
		next();
	});
}

controller.index = [
	loadAllUsers,
	function(req,res,next) {
		//find all articles, render the index.ejs view
		Article.find({},function(err,articles) {
			if(err) return next(err);
			res.render('article/index',{articles:articles,users:req.users});
		});

	}
];

controller.view = [
	loadAllUsers,
	function(req,res,next) {
		res.render('article/view',{article:req.article,users:req.users});
	}
];

controller.create = [
	//validate article
	function(req,res,next) {
		if("title" in req.body && req.body.name !== '') {
			next();
		} else {
			res.send(400);
		}
	},
	function(req,res,next) {
		//function to create the article
		Article.create(req.body,function(err) {
			if(err) return next(err);
			res.redirect("/articles");
		});
	}
];

controller.update = [
	function(req,res,next) {
		//update article, send back the new json
		for(key in req.body) {
			req.article[key] = req.body[key];
		}
		req.article.save(function(err,article) {
			res.json(article);
		});
	}
];

controller.delete = [
	function(req,res,next) {
		req.article.remove(function(err) {
			if(err) return next(err);
			res.send(201);
		})
	},
];

module.exports = controller;