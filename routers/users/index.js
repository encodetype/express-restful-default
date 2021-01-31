const express = require("express");

const usersRouter = express.Router();

usersRouter
  .route("/")
  .get((req, res) => {
    console.log("get users");
    res.sendStatus(200);
  })
  .post((req, res) => {
    console.log("create users");
    res.sendStatus(201);
  })
  .delete((req, res) => {
    console.log("delete users");
    res.sendStatus(200);
  })
  .patch((req, res) => {
    console.log("updated users");
    res.sendStatus(200);
  });

module.exports = usersRouter;
