const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  tour_id: {
    type: String,
    required: true
  },
  tour_package:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TourPackage',
    required: true
  },
  departure_date:{
    type: Date,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  child_price:{
    type: Number,
    required: true
  },
  baby_price:{
    type: Number,
    required: true
  },
  total_seat:{
    type: Number,
    required: true
  },
  remaining_seat:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Tour', tourSchema, "Tour");
