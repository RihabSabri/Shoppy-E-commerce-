const express = require("express");
const router = express.Router();
const { VerifyToken } = require("../middlewares/tokenVerify.js");
const {
  getOrders,
  postOrder,
  updateOrder,
  deleteOrder,
  getOrder,
} = require("../controllers/order");

router.route("/").get(VerifyToken, getOrders).post(VerifyToken, postOrder);
router
  .route("/:id")
  .patch(VerifyToken, updateOrder)
  .delete(VerifyToken, deleteOrder)
  .get(VerifyToken, getOrder);

module.exports = router;
