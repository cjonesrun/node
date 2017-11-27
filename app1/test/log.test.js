var assert = require('assert');
var logger = require('../logging');
var child_process = require('child_process');
const uuidv4 = require('uuid/v4');

var access_log_file = 'log/access.log';
var app_log_file = 'log/app.log';
var err_log_file = 'log/error.log';

describe('log-test-suite', function() {

  before("before", function() {
    // runs before all tests in this block
    logger.config();
  });

  after("after", function() {
    // runs after all tests in this block
  });

  beforeEach("before each", function() {
    // runs before each test in this block
  });

  afterEach("after each", function() {
    // runs after each test in this block
  });

  // test cases
  describe('test log appending', function() {
      it('log uuid to '+ app_log_file +' and check log for occurrence', (done) => {
        var uuid = uuidv4();
        logger.getLogger().info("dumping UUID to default", uuid);

        findUUID(app_log_file, uuid, (err, data) => {
          // err non-null, fail the test
          assert.equal(err, null, "some error occurred.", err);
          // assert that there were matches
          assert.equal(true, data!==null&&data.length>0, uuid+" not found in " + app_log_file);
          done();
        });
      });
      it('log uuid to '+ err_log_file +' and check log for occurrence', (done) => {
        var uuid = uuidv4();
        logger.getLogger().error("dumping UUID to default&error", uuid);

        findUUID(err_log_file, uuid, (err, data) => {
          // err non-null, fail the test
          assert.equal(err, null, "some error occurred.", err);
          // assert that there were matches
          assert.equal(true, data!==null&&data.length>0, uuid+" not found in " + err_log_file);
          done();
        });
      });
      it('log uuid to '+ access_log_file +' and check log for occurrence', (done) => {
        var uuid = uuidv4();
        logger.getLogger("access").info("dumping UUID to access", uuid);

        findUUID(access_log_file, uuid, (err, data) => {
          // err non-null, fail the test
          assert.equal(err, null, "some error occurred.", err);
          // assert that there were matches
          assert.equal(true, data!==null&&data.length>0, uuid+" not found in " + access_log_file);
          done();
        });
      });
    });
});

function findUUID( filename, regexp, callback ) {
    cmd = "egrep '" + regexp.toString().slice(1, -1) + "' " + filename;
    child_process.exec(cmd, {maxBuffer: 200000000}, function(err, stdout, stderr) {
      callback(err, stdout);
    });
}
