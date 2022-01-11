const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ success: false, error: "Token is not valid." });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ success: false, error: "Please Log In." });
  }
};

module.exports = { VerifyToken };
