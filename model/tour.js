const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  tour_id: {
    type: String,
    required: true,
  },
  tour_package:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TourPackage"
  },
  departure_date:{
    type: String
  },
  price:{
    type: Number
  },
  child_price:{
    type: Number
  },
  baby_price:{
    type: Number
  }
});

module.exports = mongoose.model('Tour', tourSchema, "Tour");
