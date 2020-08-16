const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  name: String,
  price: Number,
  barid: Number
});

module.exports = mongoose.model('Product', productSchema);
