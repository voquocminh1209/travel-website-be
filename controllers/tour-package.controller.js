const TourPackage = require("../model/tour-package.model");

const tourPackageController = {

  getToursPackage: async (req, res) => {
    try {
      const tourPackages = await TourPackage.find();
      res.status(200).json({
        success: true,
        message: "Successfully",
        tourPackages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  },

  getTourPackageById: async (req, res) => {
    try {
      const tourPackage = await TourPackage.findById(req.params.id)
      res.status(200).json({
        success: true,
        message: "Successfully",
        tourPackage
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  },

  createTourPackage: async (req, res) => {
    try {
      const newTourPackage = new TourPackage({
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        time: req.body.time,
        vehicle: req.body.vehicle,
        departurePlace: req.body.departurePlace,
        destination: req.body.destination,
        schedule: req.body.schedule,
        policy: req.body.policy,
      });
      const saveTourPackage = await newTourPackage.save();
      res.status(200).json({
        success: true,
        message: "Successfully",
        saveTourPackage
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  },

  updateTourPackage: async (req, res) => {
    try {
      const update = {
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        time: req.body.time,
        vehicle: req.body.vehicle,
        departurePlace: req.body.departurePlace,
        destination: req.body.destination,
        schedule: req.body.schedule,
        policy: req.body.policy,
      };
      const updatedTourPackage = await TourPackage.findOneAndUpdate(
        { _id: req.params.id },
        update,
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Successfully",
        updatedTourPackage
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  },

  deleteTourPackage: async (req, res) => {
    try {
      const deletedTourPackage = await TourPackage.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Successfully",
        deletedTourPackage
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  },
};

module.exports = tourPackageController;
