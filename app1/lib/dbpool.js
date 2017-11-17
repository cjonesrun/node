'use strict';

//Database functions
const pg = require('pg');

var connProps = {
    host: 'chianti.ls.cbn',
    database: 'cjones',
    user: 'abrazo',
    password: 'abrazo'
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

module.exports = { dbpool: pool, query: runQuery }
