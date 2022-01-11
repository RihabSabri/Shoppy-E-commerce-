const mongoose = require("mongoose");

const Connection = (URL) => {
  mongoose.connect(URL);
};

module.exports = Connection;
