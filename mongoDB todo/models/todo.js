var mongoose = require('mongoose');
var schema = mongoose.Schema;

var todoSchema = new schema({
	name:String,
	createdAt:{type:Date,default:Date.now}
});

//Register model
mongoose.model('todo',todoSchema);
