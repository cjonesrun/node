var debug = require('debug');
var path = require('path');
var bodyParser = require('body-parser')

var error = debug('nodeexpress:error');
var log = debug('nodeexpress:log');

// by default stderr is used
error('goes to stderr!');

// set this namespace to log via console.log
log.log = console.log.bind(console); // don't forget to bind to console!
log('goes to stdout');
error('still goes to stderr!');

// set all output to go via console.info
// overrides all per-namespace log settings
debug.log = console.info.bind(console);
error('now goes to stdout via console.info');
log('still goes to stdout, but via console.info now');
var third = debug('nodeexpress:third');
third('blah blah blah');


var PORT = process.env.PORT || 8080;

var express = require("express");
var app = express();

// routes
var routes = require('./routes/index.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//handle GET requests on /
//app.get('/', function(req, res){res.render('index.jade', {title: 'Chris Jones'});});

app.use('/', routes);

//listen on localhost:8080
console.log("listening on 8080");
log('listening on 8080');

app.listen(8080);

console.log('pid:%d listening on %d', process.pid, PORT);
