'use strict';

//Database functions
const pg = require('pg');
const colors = require('colors');

var connProps = {
//    host: '172.17.0.2',
    host: '127.0.0.1',
    port: 5432,
    database: 'testing',
    user: 'cj',
    password: 'cj',
    max: 10, // max number of clients in the pool 
    idleTimeoutMillis: 30000
};

console.log("db connection properties:", connProps);

console.log(colors.grey(
      `Postgres is online using ${connProps.database} as user ${connProps.user}\n` + 
      `and is listening on ${connProps.host}`));

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


runQuery("select * from public.widget;", [], (err, results) => {
    if (err) {
        throw err;
    }

    var j = [];
    for (var r in results.rows) {
      var b = {};
      b["id"] = results.rows[r].id;
      b["name"] = results.rows[r].name;
      b["desc"] = results.rows[r].description;
      j.push(b);
    };
    console.log(j);
    endPool();
  });


function endPool()
{
  console.log("closing pool");
  pool.end();
}

module.exports = { dbpool: pool, query: runQuery }
