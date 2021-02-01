const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "U!d!#11a!%BD&&!/~!";
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

module.exports = {
  JWT_SECRET_KEY,
  JWT_ALGORITHM,
};
