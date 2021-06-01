const {model, Schema} = require('mongoose');

const Movie = new Schema({
  name: String,
  genre: String,
  directorId: String
});

module.exports = model('Movie', Movie);