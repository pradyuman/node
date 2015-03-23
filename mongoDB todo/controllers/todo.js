var mongoose = require('mongoose'),
	todo = mongoose.model('todo'),
	controller = {};

controller.index = [
	function(req,res,next) {
		todo.find({},function(err,todos){
			if(err) return next(err);
			res.render('index',{todos:todos});
		});
	}
];

controller.create = [
	//Making sure name is in the request body
	function(req,res,next){
		if("name" in req.body && req.body.name !== ''){
				next();
		} else {
			res.send(400);
		}
	},
	function(req,res,next) {
		todo.create(req.body, function(err,todo){
			if(err) return next(err);
			res.redirect("/");
		});
	}
];

controller.update = [
	function(req,res,next) {
		todo.findById(req.param('todoID'), function(err,todo) {
			if(err) return next(err);
			if(!todo) return res.send(404);
			req.todo = todo; //Passing info to next() using request
			next();
		});
	},
	function(req,res,next){
		for(key in req.body) {
			req.todo[key] = req.body[key];
		}
		req.todo.save(function(err, todo) {
			res.json(todo);
		});
	}
];

controller.delete = [
	function(req,res,next){
		if("name" in req.body && req.body.name !== ''){
				next();
		} else {
			res.send(400);
		}
	},
	function(req,res,next) {
		todo.remove(req.body, function(err,todo){
			if(err) return next(err);
			res.redirect("/");
		});
	}
];

module.exports = controller
