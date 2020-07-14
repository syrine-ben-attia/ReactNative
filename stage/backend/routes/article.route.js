const express = require('express')
const articleRoutes = express.Router()
const article = require('../models/article.model')


articleRoutes.route('/').get(function(req, res) {
    article.find(function(err, article) {
        if (err) {
            console.log(err);
        } else {
            res.json(article);
        }
    });
});



articleRoutes.route('/:id').get((req, res) => {
    console.log(res)
    article.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(400).json('Error: ' + err));
  });

articleRoutes.route('/addArticle').post(function(req, res) {
    let newArticle = new article (req.body);
    newArticle.save()
        .then(article => {
            res.status(200).json({'article': 'artcile added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new article failed');
        });
});



articleRoutes.route('/update/:id').post(function(req, res) {
    article.findById(req.params.id, function(err, todo) {
        if (!article)
            res.status(404).send("data is not found");
        else
            article.title = req.body.title;
            article.body = req.body.body;
            

            article.save().then(article => {
                res.json('Article updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});





articleRoutes.route('/delete/:id').delete((req, res, next) => {
    article.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })


module.exports = articleRoutes
