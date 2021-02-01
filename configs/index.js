const serverConfig = require("./server");
const rateLimit = require("./rateLimit");
const jwt = require("./jwt");

module.exports = {
  ...serverConfig,
  ...rateLimit,
  ...jwt,
};
