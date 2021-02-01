const server = require("./server");
const { PORT } = require("./configs");

const main = async () => {
  try {
    await server.start(PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

process.on("SIGTERM", () => {
  console.log("completed");
});

main();
