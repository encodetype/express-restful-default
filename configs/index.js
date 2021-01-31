const serverConfig = require("./server");
const rateLimit = require("./rateLimit");

module.exports = {
  ...serverConfig,
  ...rateLimit,
};
