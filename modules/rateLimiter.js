const rateLimit = require("express-rate-limit");

const { RATE_LIMIT_MAX_PER_CYCLE, RATE_LIMIT_CYCLE } = require("../configs");

const createRateLimit = (store = null) => {
  return rateLimit({
    windowMs: RATE_LIMIT_CYCLE,
    max: RATE_LIMIT_MAX_PER_CYCLE,
    message: `Try again in next ${RATE_LIMIT_CYCLE / 1000} seconds`,
    ...(store && { store }),
  });
};

// 1000 request per minutes
const rateLimiter = (storeType, config = {}) => {
  switch (storeType) {
    case "default":
      return createRateLimit();
    case "redis":
      return createRateLimit();
    default:
      throw new Error("rate limit not support store type");
  }
};

module.exports = rateLimiter;
