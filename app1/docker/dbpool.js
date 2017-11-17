'use strict';

//Database functions
const pg = require('pg');

var connProps = {
    host: '172.17.0.2',
    port: 5432,
    database: 'testing',
    user: 'cj',
    password: 'cj'
};

console.log("db connection properties:", connProps);

let pool = new pg.Pool(connProps);

function runQuery(query, argsArray, callback) {
    pool.connect((err, client, done) => {
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


runQuery("select * from public.item;", [], (err, results) => {
    if (err) {
        throw err;
    }

    var j = [];
    for (var r in results.rows) {
      var b = {};
      b["id"] = results.rows[r].id;
      b["desc"] = results.rows[r].desc;
      j.push(b);
    };
    console.log(j);
  });
module.exports = { dbpool: pool, query: runQuery }
