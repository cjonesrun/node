var log = require( "./lib/log.js" );

// make log dir if missing
try {
  require('fs').mkdirSync('./log');
} catch (e) {
  if (e.code != 'EEXIST') {
    console.error("Could not mkdir ./log. error: ", e);
    process.exit(1);
  }
}

// init logging
/*log4js.configure('./config/log4js.json');
console.log("initializing log4js");

console.log("fetching appenders");
var applog = log4js.getLogger( "app" );
var accesslog = log4js.getLogger( "access" );
var erlog = log4js.getLogger("error");
console.log(applog, accesslog, erlog);

log4js.getLogger("default").error("specifically to default category");
log4js.getLogger().error("no category specified");

accesslog.info("access category, info level");
accesslog.error("access category, error level");
applog.info("app category, info level");

console.log("done");
//process.exit(0);*/

console.log(log);
log.trace("shortcut to <>");
log.debug("shortcut to <>");
log.info("shortcut to <>");
log.warn("shortcut to <>");
log.error("shortcut to <>");
log.fatal("shortcut to <>");

log.logger().info("info level message to <>");
log.logger("default").info("info level message to <default>");
log.logger("access").info("info level message to <access>");
log.logger("access").error("some error on access");
