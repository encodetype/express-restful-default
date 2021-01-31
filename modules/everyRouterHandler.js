const { model } = require("mongoose");

const caseLived = (express) => {
  const router = express.Router();

  router.all("/", (req, res) => {
    res.sendStatus(200);
  });
  return router;
};

const caseNotFound = (req, res) => {
  res.sendStatus(404);
};

module.exports = {
  caseLived,
  caseNotFound,
};
