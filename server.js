const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const start = async (PORT) => {
  const app = express();

  /*
    Note: 
        corsOptions: 
            origin: 'http://example.com' or function(origin,callback),
            optionsSuccessStatus: 200

    */
  app.use(cors());

  /*
    Note: 
        helmet.contentSecurityPolicy()
        helmet.dnsPrefetchControl()
        helmet.expectCt()
        helmet.frameguard()
        helmet.hidePoweredBy()
        helmet.hsts()
        helmet.ieNoOpen()
        helmet.noSniff()
        helmet.permittedCrossDomainPolicies()
        helmet.referrerPolicy()
        helmet.xssFilter()

        /X-Powered-By
    */
  app.use(helmet());

  app.use(morgan("tiny"));

  app.listen(PORT);
};

module.exports = {
  start,
};
