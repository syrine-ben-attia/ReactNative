var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title:  String,
  body:   String,
},{
  collection : 'users'
});
const favorite = mongoose.model('favorites', favoriteSchema)
module.exports = Article