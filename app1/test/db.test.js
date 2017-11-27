var assert = require('assert');
var dbapi = require('../db');

describe('db-test-suite', function() {

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
    it('checking size of returned results', function(done) {
      dbapi.getDB().query("select * from public.widget;", [], (err, result) => {
          assert.equal(err, null, "some error occurred.", err);
          assert.equal(4, result.rows.length);
          done();
        });
      });

    it('check that returned results contains "nothing"', function(done) {
      dbapi.getDB().query("select * from public.widget;", [], (err, result) => {
          assert.equal(err, null, "some error occurred.", err);

          var filtered = result.rows.reduce(function(prevVal, elem) {
            if ('nothing' === elem.name)
                prevVal.push(elem.name);
            return prevVal;
          }, []);

          assert.equal(true, filtered.length>0, '"nothing" is not in the list');
          done();
        });
      });
    });

    describe('widget CRUD', function() {
      it('insert widget', function() {
        assert.equal(1,1);
      });

      it('insert and update widget', function() {
        assert.equal(1,1);
      });

      it('select widget by name', function() {
        assert.equal(1,1);
      });

      it('select and update widget', function() {
        assert.equal(1,1);
      });

      it('delete and update widget', function() {
        assert.equal(1,1);
      });

      it('delete widget', function() {
        assert.equal(1,1);
      });
    });
});
