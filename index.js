const server = require("./server");
const { PORT } = require("./configs");

const main = async () => {
  try {
    await server.start(PORT);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const sigtermHandler = () => {
  console.log("exit completed");
};
process.on("SIGTERM", sigtermHandler);

main();
