const mongoose = require('mongoose');
//const Article = mongoose.model('Article');
const Article = require('./../models/Article');

module.exports = {
  index: function (req, res) {
    Article
    .find()
    .limit(6)
    .populate('author')
    .then(articles => 
      {
        res.render('home/index', {articles});
      });
  }
};