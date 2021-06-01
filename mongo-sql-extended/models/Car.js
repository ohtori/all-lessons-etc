const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  brand: {type: String, required: true},
  model: {type: String, required: true},
  year: {type: String, required: true},
  VIN: {type: String, required: true, unique: true},
  color: {type: String, required: true},
  creationDate: {type: Date, default: Date.now},
  price: {type: Number, require: true}
});

module.exports = model('Car', schema);