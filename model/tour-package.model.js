const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
  },
  vehicle: {
    type: String,
  },
  departurePlace: {
    type: String,
  },
  destination: {
    type: String,
  },
  schedule: {
    type: String,
  },
  policy: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model(
  "TourPackage",
  tourPackageSchema,
  "TourPackage"
);
