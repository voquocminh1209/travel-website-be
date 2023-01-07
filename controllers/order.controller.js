const Order = require("../model/order.model");

const orderController = {
  createOrder: async (req, res) => {
    try {
      const newOrder = new Order({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        tour: req.body.tour,
        adult: req.body.adult,
        child: req.body.child,
        baby: req.body.baby,
        paypal: req.body.paypal,
        total: req.body.total,
      });
      const saveOrder = await newOrder.save();
      // Send order info to customer when order succesfully
      res.status(200).json({
        success: true,
        message: "Get orders successfully",
        saveOrder,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const {id} = res.params;
      const deletedOrder = await Order.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Successfully",
        deletedOrder,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  getOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json({
        success: true,
        message: "Get orders successfully",
        orders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);
      res.status(200).json({
        success: true,
        message: "Get orders successfully",
        order,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
};

module.exports = orderController;
