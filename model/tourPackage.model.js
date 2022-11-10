const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  time: {
    type: String,
    required: true
  },
  vehicle: {
    type: String,
    required: true
  },
  departure_place: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
  },
  policy: {
    type: String,
  },
  question: {
    type: String,
  },
  thumbnail: {
    type: Object,
    required: true
  },
});

module.exports = mongoose.model(
  "TourPackage",
  tourPackageSchema,
  "TourPackage"
);
