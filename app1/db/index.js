'use strict';
const cfg = require('../config');
const pg = require('pg');

let _db;

const connectDB = async (callback) => {
  try {
    _db = new pg.Pool( cfg.dbprops );
  } catch (e) {
    throw e;
  }
}

const getDB = () => _db;

const disconnectDB = () => {
  _db.end();
}

const query = (query, argsArray, callback) => {
    _db.connect((err, client, done) => {
        if (err) {
            //likely a connection error that will print to console.
            done();
            throw err;
        }
        client.query(query, argsArray, (err, results) => {
            done(); //call done to release the client to the connection pool.
            callback(err, results); //make it the callers responsiblity for checking for query errors.
        });
    });
}

const getWidgets = (callback) => {
  _db.query("select * from public.widget;", [], (err, results) => {
      if (err) {
          throw err;
      }

      var j = [];
      for (var r in results.rows) {
        var b = {};
        b["id"] = results.rows[r].id;
        b["name"] = results.rows[r].name;
        b["desc"] = results.rows[r].description;
        b["date"] = results.rows[r].datemodified;
        j.push(b);
      };
      callback(j);
    });
}

module.exports = Object.assign({}, { query, connectDB, getDB, disconnectDB, getWidgets });
