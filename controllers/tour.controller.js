const Tour = require("../model/tour.model");

const tourController = {
  //get all tour
  getAllTour: async(req,res)=>{
    try {
      const tours = await Tour.find();
      res.status(200).json(tours);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all tour by tour package id
  getAllTourByTourPackageId: async (req, res) => {
    try {
      const tours = await Tour.find({tour_package: req.params.tour_package_id});
      res.status(200).json(tours);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //add new tour
  addNewTour: async (req, res) => {
    try {
      const newTour = new Tour(req.body);
      const saveTour = await newTour.save();
      res.status(200).json(saveTour);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //update tour by tour id
  updateTour: async (req, res) => {
    try {
      const result = await Tour.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete tour by id
  deleteTour: async (req, res) => {
    try {
      const result = await Tour.findByIdAndDelete(req.params.id );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = tourController;
