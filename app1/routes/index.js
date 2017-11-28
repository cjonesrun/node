var express = require('express');
var router = express.Router();

// load sub-class routes
require('./widgets')(router);
require('./widget_rest.js')(router);

module.exports = router;
