const router = require("express").Router();

const tourPackageController = require("../controllers/tourPackageController");

//add tour package
router.post("/", tourPackageController.addTourPackage);

//get all tour package
router.get("/", tourPackageController.getAllTourPackage);

module.exports = router;