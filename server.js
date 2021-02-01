const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

// routers
const globalRouterHandler = require("./modules/global-router-handler");
const bodyParserJson = require("./modules/body-parser-handler");
const allRouters = require("./routers");

const rateLimiter = require("./modules/rate-limiter");

const start = async (PORT) => {
  const app = express();

  app.use(rateLimiter("default"));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParserJson());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  app.all("/", globalRouterHandler.caseLived);
  app.use(allRouters);
  app.use(globalRouterHandler.caseNotFound);

  const listenHandler = () => {
    console.log(`Server start at PORT: ${PORT}`);
  };
  app.listen(PORT, listenHandler);
};

module.exports = {
  start,
};
