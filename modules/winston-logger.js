const winston = require("winston");

const winstonLogger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "express-restful-logger" },
  transports: [new winston.transports.Console()],
  exitOnError: false,
});

const logger = {
  error(message = "") {
    return winstonLogger.log({ level: "error", message });
  },
  warn(message = "") {
    return winstonLogger.log({ level: "warn", message });
  },
  info(message = "") {
    return winstonLogger.log({ level: "info", message });
  },
  http(message = "") {
    return winstonLogger.log({ level: "http", message });
  },
  verbose(message = "") {
    return winstonLogger.log({ level: "verbose", message });
  },
  debug(message = "") {
    return winstonLogger.log({ level: "debug", message });
  },
  silly(message = "") {
    return winstonLogger.log({ level: "silly", message });
  },
  /*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
  */
};

module.exports = logger;
