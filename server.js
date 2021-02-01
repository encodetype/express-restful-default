const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("./modules/winston-logger");
const stripAnsi = require("strip-ansi");

// routers
const globalRouterHandler = require("./modules/global-router-handler");
const bodyParserJson = require("./modules/body-parser-handler");
const allRouters = require("./routers");

const rateLimiter = require("./modules/rate-limiter");

const stream = require("stream");

// TODO: move to right directory
const morganStream = new stream.Writable();
morganStream._write = (chunk, encoding, callback) => {
  logger.info(stripAnsi(chunk.toString("utf-8")));
  callback(null);
};

const start = async (PORT) => {
  const app = express();

  app.use(rateLimiter("default"));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParserJson());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    morgan("dev", {
      stream: morganStream,
    })
  );

  app.all("/", globalRouterHandler.caseLived);
  app.use(allRouters);
  app.use(globalRouterHandler.caseNotFound);

  const listenHandler = () => {
    logger.info(`Server start at PORT: ${PORT}`);
  };
  app.listen(PORT, listenHandler);
};

module.exports = {
  start,
};
