var log4js = require( "log4js" );

log4js.configure({
  appenders: { 
    console: { type: "console", layout: { type: "basic" } },
    app: { type: "dateFile", filename: "log/app.log", pattern: "-yyyy-MM-dd" },
    access: { type: "dateFile", filename: "log/access.log", pattern: "-yyyy-MM-dd" },

    exceptions: { type: "file", filename: "log/error.log", maxLogSize: 10240, numBackups: 3 },
    error: { type: "logLevelFilter", appender: "exceptions", level: "error" }


  },
  categories: { 
    default: { appenders: ["console", "app", "error"], level: "info" },
    access: { appenders: [ "access" ], level: "trace" }
  }
});

var log_interface = log4js;

var default_logger = log_interface.getLogger(); // default
var log = default_logger; // short name for export

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
    log, getLogger,
    trace, debug, info, warn, error, fatal });
