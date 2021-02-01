const server = require("./server");
const { PORT } = require("./configs");
const logger = require("./modules/winston-logger");

const main = async () => {
  try {
    await server.start(PORT);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

const sigtermHandler = () => {
  logger.info("SIG TERM Events");
};
process.on("SIGTERM", sigtermHandler);

main();
