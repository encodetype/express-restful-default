const express = require("express");

const jwtAuthentication = require("../modules/jwt-authentication");

const routers = express.Router();

//router
const userRouter = require("./users");

const publicPath = ["/tool-kit"];
routers.use(
  jwtAuthentication.setup(publicPath),
  jwtAuthentication.catchUnauthorization
);

routers.use("/pages", jwtAuthentication.authorize("admin"), userRouter);
routers.use("/groups", jwtAuthentication.authorize("group"), userRouter);
routers.use("/users", jwtAuthentication.authorize("user"), userRouter);

// routers.get("/tool-kit", (req, res) => {
//   res.json(
//     jwtAuthentication.generate({
//       username: "encodetype",
//       displayName: "Encode Type",
//       permissions: ["admin"],
//     })
//   );
// });

module.exports = routers;
