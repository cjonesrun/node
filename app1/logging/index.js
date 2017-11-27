'use strict';
var log4js = require( "log4js" );
const cfg = require('../config');

let _log

const configureLogger = async (callback) => {
  try {
    // make log dir if missing
    try {
      require('fs').mkdirSync('./log');
    } catch (e) {
      if (e.code != 'EEXIST') {
        console.error("Could not mkdir ./log. error: ", e);
        process.exit(1);
      }
    }

    log4js.configure(cfg.logprops);
    _log = log4js;
    //console.log('pg pool is online with', cfg.dbprops);
  } catch (e) {
    throw e;
  }
}

const getLogger = (str) => {
  return _log.getLogger(str);
}

const connectLogger = (logger, props) => {
  return _log.connectLogger(logger, props);
}

module.exports = Object.assign( { }, {
  config : configureLogger,
  getLogger : getLogger,
  connect : connectLogger
});
