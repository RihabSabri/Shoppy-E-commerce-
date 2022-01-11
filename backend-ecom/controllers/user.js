const User = require("../models/user");
const Crypto = require("crypto-js");

const updateUser = async (req, res) => {
  if (req.user.id == req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = Crypto.AES.encrypt(
        req.body.password,
        process.env.PASS_ENC
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({ success: true, updatedUser });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  }
  return res.status(403).json({ success: false, error: "Permission denied" });
};

const deleteUser = async (req, res) => {
  if (req.user.id == req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .send({ success: true, msg: "User was successfuly deleted" });
    } catch (error) {
      return res
        .status(403)
        .json({ success: false, error: "Permission denied" });
    }
  }
};

const getUser = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res
          .status(404)
          .send({ success: false, msg: "User does not exist" });
      }
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
};
const getAllUsers = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const user = await User.find({});
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
};
module.exports = { updateUser, deleteUser, getUser, getAllUsers };
