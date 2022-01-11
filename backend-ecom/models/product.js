const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    OnSale: {
      type: Boolean,
      default: false,
    },
    OnDelivery: {
      type: Boolean,
      default: false,
    },
    brand: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
