const router = require("express").Router();
const verifyToken = require("../middleware/auth")
const tourPackageController = require("../controllers/tourPackage.controller");

router.post("/", tourPackageController.createTourPackage);

router.get("/", tourPackageController.getAllTourPackage);

router.put("/update/:id", tourPackageController.updateTourPackage);

router.delete("/delete/:id", tourPackageController.deleteTourPackageById);

module.exports = router;