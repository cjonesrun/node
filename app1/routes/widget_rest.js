var request = require("request");
var express = require('express');
var router = express.Router();

const {WidgetRepo} = require('../repo/widgets.js');

var repo = new WidgetRepo("name");
console.log(repo);

module.exports = (router) => {
  console.log("adding", __filename);
  router.get('/rest/widgets', function(req, res) {
    var db = req.db;

    repo.getWidgets(db, (results) => {
        res.json(results);
    });
  });

  router.get('/rest/widgets/:widgetid', function(req, res) {
    var db = req.db;
    var widgetid = req.params.widgetid;
    repo.getWidget( widgetid, db, (results) => {
      if (results != null && results.length == 1)
        res.json(results[0]);
      else
        res.json({});
    });
  });
};
