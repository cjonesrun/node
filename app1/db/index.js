'use strict';
const cfg = require('../config');
const pg = require('pg');

let _db;

const connectDB = async (callback) => {
  try {
    _db = new pg.Pool( cfg.dbprops );
    //console.log('pg pool is online with', cfg.dbprops);
  } catch (e) {
    throw e;
  }
}

const getDB = () => _db;

const disconnectDB = () => {
  console.log("closing pool");
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




/*connectDB();
var time =  _db.query('select * from widget;')
console.log( time.then((r) => { console.log (r.rows);}) ) ;
disconnectDB();*/

module.exports = Object.assign({}, { query, connectDB, getDB, disconnectDB });
