const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  approved: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
});

module.exports = mongoose.model('Order', OrderSchema);
