'use strict';

//Database functions
const dbapi = require('../db');
console.log(db);

dbapi.connectDB();

var db = dbapi.getDB();

db.query("select * from public.widget;", [], (err, results) => {
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
  });

console.log("all done");

dbapi.disconnectDB();
