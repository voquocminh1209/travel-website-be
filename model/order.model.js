const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Tour'
    },
    adult: {
      type: Number,
      default: 0
    },
    child: {
      type: Number,
      default: 0
    },
    baby: {
      type: Number,
      default: 0
    },
    paypal: {
      type: Object
    },
    total: {
      type: Number,
      default: 0
    }
});

module.exports = mongoose.model('Order', orderSchema, "Order");
