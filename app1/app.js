var path = require('path');
var bodyParser = require('body-parser')
var logging = require( "./logging" );
var dbapi = require("./db");
var express = require("express");
var app = express();

// hook logging into experess
app.use( logging.connect( logging.getLogger("access"), { level: 'auto' }) );

// routes
var routes = require('./routes/index.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


// hook dbapi to req
app.use( (req,res,next) => {
    req.db = dbapi;
    next();
});

logging.getLogger().info("setting routes");
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    logging.getLogger().info("development logging enabled.");
    app.use(function(err, req, res, next) {
        logging.getLogger("access").error("Something went wrong:", err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            status: err.status,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    logging.getLogger("access").error("Something went wrong:", err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        status: err.status,
        error: {}
    });
});

module.exports = app;
