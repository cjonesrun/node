var assert = require('assert');

describe('db-tests', function() {

  before("before", function() {
    // runs before all tests in this block
    // connect to db
  });

  after("after", function() {
    // runs after all tests in this block
    // disconnect from db
  });

  beforeEach("before each", function() {
    // runs before each test in this block
  });

  afterEach("after each", function() {
    // runs after each test in this block
  });

  // test cases
  describe('test-case-1', function() {
    describe('do-domething', function() {
      it('should assert to true', function() {
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    });
  });

  /*describe('test-case-2', function() {
    describe('do-domething-else', function() {
      it('test fail example', function() {
        assert.equal(-1, 1);
      });
    });
  });*/
});
