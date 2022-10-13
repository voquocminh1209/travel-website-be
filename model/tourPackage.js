const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
  vehicle: {
    type: String,
  },
  departure_place: {
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
  question: {
    type: String,
  },
  thumbnail: {
    type: Object,
  },
});

module.exports = mongoose.model(
  "TourPackage",
  tourPackageSchema,
  "TourPackage"
);
