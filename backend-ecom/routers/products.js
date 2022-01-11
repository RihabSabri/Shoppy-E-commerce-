const express = require("express");
const router = express.Router();
const { VerifyToken } = require("../middlewares/tokenVerify.js");
const {
  getProducts,
  deleteProduct,
  addProduct,
  updateProduct,
  getSingleProduct,
} = require("../controllers/product.js");

router.route("/").get(getProducts).post(VerifyToken, addProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(VerifyToken, updateProduct)
  .delete(VerifyToken, deleteProduct);

module.exports = router;
