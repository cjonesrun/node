var assert = require('assert');
var logger = require('../log');
var child_process = require('child_process');
const uuidv4 = require('uuid/v4');

var log_file = 'out/app.log';

describe('log-tests', function() {

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
      it('log uuid to '+ log_file +' and check log for occurrence', (done) => {
        var uuid = uuidv4();
        logger.getLogger().info("dumping UUID to default", uuid);

        findUUID(log_file, uuid, (err, str) => {
          // err non-null, fail the test
          assert.equal(err, null, "some error occurred.");
          // assert that there were matches
          assert.equal(true, str!==null&&str.length>0, uuid+" not found in " + log_file);
          done();
        });
      });
    });
});

function findUUID( filename, regexp, done ) {
    cmd = "egrep '" + regexp.toString().slice(1, -1) + "' " + filename;
    child_process.exec(cmd, {maxBuffer: 200000000}, function(err, stdout, stderr) {
        done(err, stdout);
    });
}
