const Cart = require("../models/cart");

const addToCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ success: true, updatedCart });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ success: true, msg: "Cart was successfuly deleted" });
  } catch (error) {
    return res
      .status(403)
      .json({ success: false, error: "Something went wrong" });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

const getAllCarts = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const carts = await Cart.find();
      res.status(200).json({ success: true, carts });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCart,
  deleteCart,
  getAllCarts,
};
