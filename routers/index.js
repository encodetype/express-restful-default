const express = require("express");

const userRouter = require("./users");

const routers = express.Router();

routers.use("/users", userRouter);

module.exports = routers;
