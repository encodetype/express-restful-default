const bodyParser = require("body-parser");

module.exports = () => {
  return (req, res, next) => {
    bodyParser.json()(req, res, (error) => {
      if (error) {
        return res.sendStatus(400);
      }

      next();
    });
  };
};
