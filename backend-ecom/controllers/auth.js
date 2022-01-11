const User = require("../models/user");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

/*************************AUTHENTICATION***************************************** */

const postUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: Crypto.AES.encrypt(
        req.body.password,
        process.env.PASS_ENC
      ).toString(),
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

/*************************LOGIN**************************************** */

const logUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      console.log(user);
      return res.status(401).json({ success: false, error: "Wrong username" });
    }

    const hashedPass = Crypto.AES.decrypt(user.password, process.env.PASS_ENC);
    const Originalpassword = hashedPass.toString(Crypto.enc.Utf8);
    if (Originalpassword != req.body.password) {
      return res.status(401).json({ success: false, error: "Wrong Password" });
    }
    const userToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ success: true, ...others, userToken });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

module.exports = { postUser, logUser };
