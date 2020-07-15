const express = require('express')
const favoriteRoutes = express.Router()
const favorite = require('../models/favorite.model')

favoriteRoutes.route('/').get(function(req, res) {
    favorite.find(function(err, favorite) {
        if (err) {
            console.log(err);
        } else {
            res.json(favorite);
        }
    });
});
favoriteRoutes.route('/addFavovrite').post(function(req, res) {
    let newFavorite = new favorite (req.body);
    newFavorite.save()
        .then(favorite => {
            res.status(200).json({'favorite': 'favorite added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new favorite failed');
        });
});

module.exports = favoriteRoutes