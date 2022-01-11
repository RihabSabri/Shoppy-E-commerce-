const Order = require("../models/order");

const postOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json({ success: true, order });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const updateOrder = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedOrder = await Cart.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({ success: true, updatedOrder });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  }
  return res.status(403).json({ success: true, error: "Permission denied" });
};

const deleteOrder = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .send({ success: true, msg: "Order was successfuly deleted" });
    } catch (error) {
      return res
        .status(403)
        .json({ success: false, error: "Something went wrong" });
    }
  }
  return res.status(403).json({ success: true, error: "Permission denied" });
};

const getOrder = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const order = await Order.findOne({ userId: req.params.id });
      return res.status(200).json({ success: true, order });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
  return res.status(403).json({ success: false, error: "Permission denied" });
};

const getOrders = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const orders = await Order.find();
      res.status(200).json({ success: true, orders });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
  return res.status(403).json({ success: false, error: "Permission denied" });
};

module.exports = {
  getOrder,
  getOrders,
  deleteOrder,
  postOrder,
  updateOrder,
};
