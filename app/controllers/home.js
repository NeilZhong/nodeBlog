var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Blog = mongoose.model('Blog');
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

});


//增加RESTful api
router.get('/admin', function (req, res, next) {

    res.render('admin/index', {
      title: 'get',
    });
});

router.post('/user', function (req, res, next) {
  User.find(function (err, user) {
    res.render('index', {
      title: 'post',
      articles: articles
    });
  });
});

router.delete('/user', function (req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    return res.jsonp(user);
    res.render('index', {
      title: 'delete',
      user: user
    });
  });
});

router.put('/user', function (req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    res.render('index', {
      title: 'put',
      user: user
    });
  });
});


//blogs API
router.get('/blog', function (req, res, next) {
  Blog.find().populate('author').populate('category').populate('comments').exec(function(err,blogs){
    res.render('index', {
      title: 'Blogs',
      blogs: blogs
    });
  });
});

router.post('/blog', function (req, res, next) {
  Article.find(function (err, articles) {
    res.render('index', {
      title: 'post',
      articles: articles
    });
  });
});

router.delete('/blog', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'delete',
      articles: articles
    });
  });
});

router.put('/blog', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'put',
      articles: articles
    });
  });
});