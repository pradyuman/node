var posts = []; //posts data

module.exports.create = function(req, res) {
    req.body.comments = [];
    posts.push(req.body);
    res.redirect('/posts');
};

module.exports.index = function(req,res){
    res.json(posts);
};

//rendering an html form to let user create a post
/*
  a post will be like this:
  {
  	title:"",
	body:"",
	author:"",
	comments:[]
  }
 */
module.exports.new = function(req,res) {
        res.send("<form method='post' action='/posts'>\
                  <input type='text' placeholder='title' name='title'/>\
                  <input type='text' placeholder='author' name='author'/>\
                  <textarea placeholder='post' name='body'></textarea>\
                  <button type='submit'>Post!</button>\
                  </form>");
};
