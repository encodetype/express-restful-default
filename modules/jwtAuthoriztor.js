const guard = require("express-jwt-permissions")();
const jwt = require("express-jwt");
const _ = require("lodash");

const { JWT_SECRET_KEY } = require("../configs");

const jwtAuthorizeHandler = (publicPath = []) =>
  jwt({
    secret: JWT_SECRET_KEY,
    getToken: function (req) {
      const token = _.get(req.headers.authorization) || _.get(req.query.token);
      return token || null;
    },
  }).unless({ path: publicPath });

const jwtPermissionHandler = (role, permission = []) => {
  const allPermission = [role];
  if (_.size(permission) > 0) {
    allPermission.push(permission);
  }
  return guard.check([...allPermission]);
};

module.exports = {
  jwtAuthorizeHandler,
  jwtPermissionHandler,
};
