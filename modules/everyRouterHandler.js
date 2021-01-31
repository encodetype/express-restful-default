const caseLived = (req, res) => {
  res.sendStatus(200);
};

const caseNotFound = (req, res) => {
  res.sendStatus(404);
};

module.exports = {
  caseLived,
  caseNotFound,
};
