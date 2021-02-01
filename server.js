const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

// routers
const globalRouterHandler = require("./modules/global-router-handler");
const endpointRouters = require("./routers");

const rateLimiter = require("./modules/rate-limiter");
const bodyParser = require("body-parser");

const bodyParserJson = (req, res, next) => {
  return () => {
    bodyParser.json()(req, res, (err) => {
      if (err) {
        return res.sendStatus(400);
      }

      next();
    });
  };
};

const start = async (PORT) => {
  const app = express();

  app.use(rateLimiter("default"));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParserJson());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  app.all("/", globalRouterHandler.caseLived);
  app.use(endpointRouters);
  app.use(globalRouterHandler.caseNotFound);

  const listenHandler = () => {
    console.log(`Server start at PORT: ${PORT}`);
  };
  app.listen(PORT, listenHandler);
};

module.exports = {
  start,
};
