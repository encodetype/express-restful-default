const express = require("express");

const userRouter = require("./users");
const {
  jwtAuthorizeHandler,
  jwtPermissionHandler,
} = require("../modules/jwtAuthoriztor");

const routers = express.Router();

const publicPath = ["/unsecured"];
routers.use(jwtAuthorizeHandler(publicPath));

routers.use("/pages", jwtPermissionHandler("page"), userRouter);
routers.use("/groups", jwtPermissionHandler("group"), userRouter);
routers.use("/users", jwtPermissionHandler("user"), userRouter);

module.exports = routers;
