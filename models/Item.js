const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  bmi: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Item = mongoose.model('item', ItemSchema);
