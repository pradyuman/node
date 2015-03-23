var mongoose = require('mongoose'),
	todo = mongoose.model('todo'),
	controller = {};

controller.index = [
	function(req,res,next) {
	
	}
];

controller.create = [
	function(req, res,next){
		next();
	},
	function() {
	
	}
];

controller.update = [
	function(req,res,next){
		next();
	},
	function(req,res,next){
	
	}
];

controller.delete = [
	function(req,res,next){
	
	}
];

module.exports = controller
