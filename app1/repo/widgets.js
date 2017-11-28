

function WidgetRepo(str) {
  var name = str;
};

WidgetRepo.prototype.getWidgets = (db, callback) => {
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
      callback(j);
    });
}

WidgetRepo.prototype.getWidget = (widgetid, db, callback) => {
  db.query("select * from public.widget where id=$1;", [widgetid], (err, results) => {
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

module.exports = {WidgetRepo};
