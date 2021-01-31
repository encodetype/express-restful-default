const server = require("./server");
const { PORT } = require("./configs");

const main = async () => {
  await server.start(PORT);
};

main();
