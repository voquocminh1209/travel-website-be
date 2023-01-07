const router = require("express").Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.delete("/", orderController.deleteOrder);

module.exports = router;
