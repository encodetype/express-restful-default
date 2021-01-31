const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const everyRouterHandler = require("./modules/everyRouterHandler");

const start = async (PORT) => {
  const app = express();

  app.use(cors());
  app.use(helmet());

  app.use(
    morgan("dev", {
      //   skip: function (req, res) {
      //     return res.statusCode == 200;
      //   },
    })
  );

  app.use(everyRouterHandler.caseLived(express));
  app.use(everyRouterHandler.caseNotFound);

  app.listen(PORT);
};

module.exports = {
  start,
};

/*
    cors Note: 
        origin
        methods
        allowedHeaders
        exposedHeaders
        credentials
        maxAge
        preflightContinue
        optionsSuccessStatus
    */

/*
    helmet Note: 
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
