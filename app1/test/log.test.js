var assert = require('assert');
var logger = require('../log');
var child_process = require('child_process');
const uuidv4 = require('uuid/v4');

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

  function blah(err, str) {
    console.log(err, str);
  }

  // test cases
  describe('test log appending', function() {
      it('log uuid to default and check log for occurrence', () => {

        console.log("one");
        something("two", (str) => {
          console.log("three");
          //assert.equal(1,2);
        });

        var cmd = "egrep '" + "somestring".toString().slice(1, -1) + "' " + "log/app.log";

        child_process.exec(cmd, {maxBuffer: 200000000}, (error, stdout, stderr) => {
          if (error)
          {
            console.log("error scenario",error)
            assert.equal(1,2)
            return errror;
          }
          console.log("success");
          assert.equal(1,2);
          return stdout;
        });

        /*var uuid = uuidv4();
        logger.getLogger().info("dumping UUID to default", uuid);

        findUUID("log/app.log", uuid).then( (str) => {
          console.log(str);
          assert.equal(1,2);
        }, (err) => { assert.equal(1,2) } ); */

      });
  });
});

function something(str, cb) {
  console.log(str);
  cb(str);
}

function findUUID(filename, regexp) {
  return new Promise((resolve, reject) => {
    var cmd = "egrep '" + regexp.toString().slice(1, -1) + "' " + filename;

    child_process.execFile(cmd, {maxBuffer: 200000000}, (error, stdout, stderr) => {
      if (error)
      { console.log("error scenario")
      assert.equal(1,2)
        return reject(error);
      }
      console.log("success");
      return resolve(stdout);
    });
  });
}
