const express = require("express");
const router = express.Router();
const { postUser, logUser } = require("../controllers/auth.js");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controllers/user.js");

//******************************AUTHENTICATION******************** */

router.route("/auth/register").post(postUser);

/*************************** LOGIN ******************************** */

router.route("/auth/signin").post(logUser);

/*****************************USERCRUD****************************** */

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/").get(getAllUsers);

module.exports = router;
