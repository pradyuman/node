var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	user:{type:Schema.Types.ObjectId,ref:"user"},
	text:String,
	createdAt:{type:Date,default:Date.now}
});

var ArticleSchema = new Schema({
	title:String,
	body:String,
	createdAt:{type:Date,default:Date.now},
	user:{type:Schema.Types.ObjectId,ref:"user"},
	comments:[CommentSchema]
});

mongoose.model('article',ArticleSchema);