const router = require("express").Router();

const tourController = require("../controllers/tourController");

//get all tour
router.get("/", tourController.getAllTour);

//get all tour by tour package id
router.get("/:tour_package_id", tourController.getAllTourByTourPackageId);

//add new tour
router.post("/", tourController.addNewTour);

//update a tour by tour id
router.put("/update/:id", tourController.updateTour);

//delete a tour by id
router.delete("/delete/:id", tourController.deleteTour);

module.exports = router;
