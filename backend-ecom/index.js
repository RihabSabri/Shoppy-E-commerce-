const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./DB/connect");
const { VerifyToken } = require("./middlewares/tokenVerify");
const routerUser = require("./routers/userAuth");
const routerProduct = require("./routers/products");
const routerCart = require("./routers/cart");
const routerOrder = require("./routers/order");
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/auth/users", VerifyToken, routerUser);
app.use("/", routerUser);
app.use("/cart", routerCart);
app.use("/api/products", routerProduct);
app.use("/user/order", routerOrder);

PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await Connection(process.env.MONGO_URI);
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is up and running on Port :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
