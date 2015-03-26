var mongoose = require('mongoose'),
	Article = mongoose.model('article'),
	User = mongoose.model('user'),
	controller = {};

controller.create = [
	function(req,res,next) {
		//push a new comment into the loaded article
		req.article.comments.push(req.body);
		req.article.save(function(err) {
			res.redirect('/articles/' + req.article.id);
		});
	}
];

controller.delete = [
	function(req,res,next) {
		//filter out the article's comments array and remove this one.
	},
];

module.exports = controller;