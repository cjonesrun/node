var assert = require('assert');
var dbapi = require('../db');

describe('db-tests', function() {

  before("before", function() {
    // runs before all tests in this block
    dbapi.connectDB();
  });

  after("after", function() {
    // runs after all tests in this block
    dbapi.disconnectDB();
  });

  beforeEach("before each", function() {
    // runs before each test in this block
  });

  afterEach("after each", function() {
    // runs after each test in this block
  });

  // test cases
  describe('load widgets', function() {
    it('checking size of returned results', function() {
      return dbapi.getDB().query('select * from widget;').then(function(result) {
        assert.equal(4, result.rows.length);
      })});

    it('check that returned results contains "nothing"', function() {
      return dbapi.getDB().query('select * from widget;').then(function(result) {

        var filtered = result.rows.reduce(function(prevVal, elem) {
          if ('nothing' === elem.name)
              prevVal.push(elem.name);
          return prevVal;
        }, []);

        assert.equal(true, filtered.length>0, 'nothing is not in the list');
      })
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
