const router = require("express").Router();
const verifyToken = require("../middleware/auth")
const tourPackageController = require("../controllers/tour-package.controller");

router.get("/", tourPackageController.getToursPackage);
router.get("/:id", tourPackageController.getTourPackageById);
router.post("/", tourPackageController.createTourPackage);
router.patch("/:id", tourPackageController.updateTourPackage);
router.delete("/:id", tourPackageController.deleteTourPackage);

module.exports = router;