const bodyParser = require("body-parser");

module.exports = () => {
  return (req, res, next) => {
    const callback = (error) => {
      if (error) {
        return res.sendStatus(400);
      }

      next();
    };
    bodyParser.json()(req, res, callback);
  };
};
