

function WidgetRepo() {};

WidgetRepo.prototype.all = (db, callback) => {
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
        b["date"] = results.rows[r].datemodified;
        j.push(b);
      };
      callback(err, j);
    });
}

WidgetRepo.prototype.getByID = (widgetid, db, callback) => {
  db.query("select * from public.widget where id=$1 limit 1;", [widgetid], (err, results) => {
      if (err) {
          throw err;
      }

      var b = {};

      if (results.rows.length == 1) {
        b["id"] = results.rows[0].id;
        b["name"] = results.rows[0].name;
        b["desc"] = results.rows[0].description;
        b["date"] = results.rows[0].datemodified;
      }

      callback(err,b);
    });
}

WidgetRepo.prototype.getByName = (name, db, callback) => {
  db.query("select * from public.widget where name=$1 limit 1;", [name], (err, results) => {
      if (err) {
        throw err;
      }

      var b = {};
      if (results.rows.length == 1) {
        b["id"] = results.rows[0].id;
        b["name"] = results.rows[0].name;
        b["desc"] = results.rows[0].description;
        b["date"] = results.rows[0].datemodified;
      }

      callback(err,b);
    });
}


module.exports = {WidgetRepo};
