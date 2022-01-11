const express = require("express");
const router = express.Router();

const { VerifyToken } = require("../middlewares/tokenVerify.js");

const {
  addToCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCarts,
} = require("../controllers/cart");

router.route("/").post(VerifyToken, addToCart).get(VerifyToken, getAllCarts);
router
  .route("/:id")
  .patch(VerifyToken, updateCart)
  .delete(VerifyToken, deleteCart)
  .get(VerifyToken, getCart);

module.exports = router;
