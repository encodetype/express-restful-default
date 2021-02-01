const guard = require("express-jwt-permissions")();
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const { JWT_SECRET_KEY, JWT_ALGORITHM = ["HS256"] } = require("../configs");

const generate = (payloads) =>
  jwt.sign(payloads, JWT_SECRET_KEY, { algorithm: _.first(JWT_ALGORITHM) });

const setup = (publicPath = []) =>
  expressJwt({
    secret: JWT_SECRET_KEY,
    algorithms: JWT_ALGORITHM,
    getToken: function (req) {
      const token =
        _.get(req.headers, "authorization") || _.get(req.query, "token");
      return token || null;
    },
  }).unless({ path: publicPath });

const catchUnauthorization = function (error, req, res, next) {
  if (error.name === "UnauthorizedError") {
    return res.sendStatus(401);
  }

  next();
};

const authorize = (role, permissions = []) => {
  let allPermissions = [role];
  if (_.size(permissions) > 0) {
    allPermissions = [
      ...permissions.map((pms) => {
        return role + ":" + pms;
      }),
    ];
  }

  return guard.check([...allPermissions]);
};

const catchAuthorize = () => {
  return (error, req, res, next) => {
    if (error.code === "permission_denied") {
      return res.sendStatus(403);
    }

    next();
  };
};

module.exports = {
  generate,
  setup,
  catchUnauthorization,
  authorize,
  catchAuthorize,
};
