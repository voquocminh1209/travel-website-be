const Tour = require("../model/tour.model");

const tourController = {
  getTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.status(200).json({
        success: true,
        message: "Successfully",
        tours,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  getTourById: async (req, res) => {
    try {
      const tour = await Tour.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "Successfully",
        tour,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  getToursByTourPackageId: async (req, res) => {
    try {
      const tours = await Tour.find({ tourPackage: req.params.id });
      res.status(200).json({
        success: true,
        message: "Successfully",
        tours,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  createTour: async (req, res) => {
    try {
      const newTour = new Tour(req.body);
      const saveTour = await newTour.save();
      res.status(200).json({
        success: true,
        message: "Successfully",
        saveTour,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  updateTour: async (req, res) => {
    try {
      const updatedTour = await Tour.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Successfully",
        updatedTour,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  deleteTour: async (req, res) => {
    try {
      const deletedTour = await Tour.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Successfully",
        deletedTour,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
};

module.exports = tourController;
