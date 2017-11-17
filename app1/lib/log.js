var log4js = require( "log4js" );

log4js.configure("./config/log4js.json");

var log_interface = log4js;

var default_logger = log_interface.getLogger(); // default

function getLogger(logger) {
  if (logger === null)
    return log_interface.getLogger();
  return log_interface.getLogger(logger);
}

function trace(str) {
    default_logger.trace(str);
}
function debug(str) {
    default_logger.debug(str);
}
function info(str) {
    default_logger.info(str);
}
function warn(str) {
    default_logger.warn(str);
}
function error(str) {
    default_logger.error(str);
}
function fatal(str) {
    default_logger.fatal(str);
}

module.exports = Object.assign( { }, {
      log: default_logger, logger: getLogger,
      trace, debug, info, warn, error, fatal });
