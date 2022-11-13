const router = require("express").Router();
const tourController = require("../controllers/tour.controller");

router.get("/", tourController.getTours);
router.get("/:id", tourController.getTourById);
router.get("/tour-package/:id", tourController.getToursByTourPackageId);
router.post("/", tourController.createTour);
router.patch("/:id", tourController.updateTour);
router.delete("/:id", tourController.deleteTour);

module.exports = router;
