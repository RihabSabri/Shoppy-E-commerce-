const Product = require("../models/product");
const User = require("../models/user");

const addProduct = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const product = await Product.create(req.body);
      return res.status(200).json({ success: true, product });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  }
  return res.status(403).json({ success: false, error: "Permission denied" });
};

const updateProduct = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({ success: true, updatedProduct });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  }
  return res.status(403).json({ success: false, error: "Permission denied" });
};

const deleteProduct = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .send({ success: true, msg: "Product was successfuly deleted" });
    } catch (error) {
      return res
        .status(403)
        .json({ success: false, error: "Permission denied" });
    }
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .send({ success: false, msg: "Product does not exist" });
    }
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
const getProducts = async (req, res) => {
  const qCategory = req.query.category;
  const qBrand = req.query.brand;
  const qDelivery = req.query.delivery;
  const qSale = req.query.sale;
  const limit = req.query.limit;
  try {
    let products;
    if (qCategory) {
      products = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else if (qBrand) {
      products = await Product.find({ brand: qBrand });
    } else if (qDelivery) {
      products = await Product.find({ OnDelivery: qDelivery });
    } else if (qSale) {
      products = await Product.find({ OnSale: qSale });
    } else if (limit) {
      productsAll = await Product.find();
      const products = productsAll.slice(0, Number(limit));
      return res.status(200).json({ success: true, products });
    } else {
      products = await Product.find();
    }
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
module.exports = {
  getProducts,
  deleteProduct,
  getSingleProduct,
  addProduct,
  updateProduct,
};
