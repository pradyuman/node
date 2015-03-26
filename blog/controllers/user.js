var mongoose = require('mongoose'),
	Article = mongoose.model('article'),
	User = mongoose.model('user'),
	controller = {};

controller.load = function(req,res,next,id) {
	User.findById(id,function(err,user) {
		if(err) return next(err);
		if(!user) return res.send(404);
		req.user = user;
		next();
	});
}

controller.index = [
	function(req,res,next) {
		//find all users, render the index.ejs view
		User.find({},function(err,users) {
			if(err) return next(err);
			res.render('user/index',{users:users});
		});
	}
];

controller.create = [
	function(req,res,next) {
		if("name" in req.body && req.body.name !== '') {
			next();
		} else {
			res.send(400);
		}
	},
	function(req,res,next) {
		User.create(req.body,function(err,user) {
			if(err) return next(err);
			res.redirect("/users");
		});
	}
];

controller.update = [
	function(req,res,next) {
		for(key in req.body) {
			req.user[key] = req.body[key];
		}
		req.user.save(function(err,user) {
			if(err) return next(err);
			res.json(user);
		});
	}
];

controller.delete = [
	function(req,res,next) {
		req.user.remove(function(err) {
			if(err) return next(err);
			res.send(201);
		});
	},
];

module.exports = controller;