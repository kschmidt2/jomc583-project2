var db = require('../config/db');

exports.list = function(req, res) {
    var collection = db.get().collection('posts');

    collection.find({}).toArray(function(err, results) {
        res.render('post/list', {posts: results});
    });
};

exports.show = function(req, res) {
    var collection = db.get().collection('posts');

    collection.find({"title": req.params.id}).limit(1).toArray(function(err, results) {
        res.render('post/show', {post: results[0]});
    });
};

exports.update = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.updateOne(
        {title: req.params.id},
        {
            $set: {
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                content: req.body.content,
                image: req.body.image,
                date: req.body.date
            }
        }
    );

    res.redirect('/posts');
};

exports.form = function(req, res) {
    res.render('post/form');
}

exports.create = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.insert({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      content: req.body.content,
      image: req.body.image,
      date: req.body.date
    });

    res.redirect('/posts');
};

exports.remove = function(req, res) {
    var collection = db.get().collection('posts');

    //note about xss and sanitization
    collection.removeOne({
        title: req.params.id
    });

    return res.redirect('/posts');
};
