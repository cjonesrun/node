var assert = require('assert');
var dbapi = require('../db');

const {WidgetRepo} = require('../repo/widgets.js');

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
      var repo = new WidgetRepo();
      repo.all(dbapi.getDB(), (err, result) => {
          assert.equal(err, null, "some error occurred. " + err);
          assert.equal(4, result.length);
          done();
        });
      });

    it('check that returned results contains "nothing"', function(done) {
      var repo = new WidgetRepo();
      repo.all(dbapi.getDB(), (err, result) => {
          assert.equal(err, null, "some error occurred. "+ err);

          var filtered = result.reduce(function(prevVal, elem) {
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
        assert.equal(1,2);
      });

      it('insert and update widget', function() {
        assert.equal(1,2);
      });

      it('select widget by name', function() {
        var repo = new WidgetRepo();
        var qualifier = 'nothing';
        repo.getByName(qualifier, dbapi.getDB(), (err, result) => {
            assert.equal(err, null, "some error occurred. "+ (err));
            assert.equal(true, result!==null);
            assert.equal(1, result.id);
            done();
          });
        });

      it('select widget by id', function(done) {
        var repo = new WidgetRepo();
        var qualifier = 1;
        repo.getByID(qualifier, dbapi.getDB(), (err, result) => {
            assert.equal(err, null, "some error occurred. "+ (err));
            assert.equal(true, result!==null);
            assert.equal(1, result.id);
            done();
          });
        });

      it('select and update widget', function() {
        assert.equal(1,2);
      });

      it('delete and update widget', function() {
        assert.equal(1,2);
      });

      it('delete widget', function() {
        assert.equal(1,2);
      });
    });
});
