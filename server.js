const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// routers
const everyRouterHandler = require("./modules/everyRouterHandler");
const endpointRouters = require("./routers");

const rateLimiter = require("./modules/rateLimiter");

const start = async (PORT) => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(rateLimiter("default"));
  app.use(morgan("dev"));

  app.all("/", everyRouterHandler.caseLived);
  app.use(endpointRouters);
  app.use(everyRouterHandler.caseNotFound);

  app.listen(PORT, () => {
    console.log(`Server start at PORT: ${PORT}`);
  });
};

module.exports = {
  start,
};
