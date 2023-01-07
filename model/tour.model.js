const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  tourId: {
    type: String,
  },
  tourPackage:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TourPackage',
    required: true
  },
  departureDate:{
    type: Date,
  },
  price:{
    type: Number,
  },
  childPrice:{
    type: Number,
  },
  babyPrice:{
    type: Number,
  },
  totalSeat:{
    type: Number,
  },
  remainingSeat:{
    type: Number,
  }
});

module.exports = mongoose.model('Tour', tourSchema, "Tour");
