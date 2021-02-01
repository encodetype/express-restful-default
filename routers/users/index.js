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
  .all((req, res) => {
    console.log("unsupport method");
    res.sendStatus(405);
  });

usersRouter
  .route("/roles")
  .get((req, res) => {
    console.log("get users role");
    res.sendStatus(200);
  })
  .post((req, res) => {
    console.log("create users role");
    res.sendStatus(201);
  })
  .delete((req, res) => {
    console.log("delete users role");
    res.sendStatus(200);
  })
  .all((req, res) => {
    console.log("unsupport method");
    res.sendStatus(405);
  });

module.exports = usersRouter;
