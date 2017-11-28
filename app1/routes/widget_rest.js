var request = require("request");
var express = require('express');
var router = express.Router();

const {WidgetRepo} = require('../repo/widgets.js');
var repo = new WidgetRepo();

module.exports = (router) => {
  console.log("adding", __filename);
  router.get('/rest/widgets', function(req, res) {
    repo.getWidgets(req.db, (err, results) => {
        res.json(results);
    });
  });

  router.get('/rest/widgets/:widgetid', function(req, res) {
    var widgetid = req.params.widgetid;
    repo.getWidgets(req.db, (err, json) => {
        res.json(json);
    });
    repo.getWidget( widgetid, db, (err, json) => {
      if (json != null && json.length == 1)
        res.json(json[0]);
      else
        res.json({});
    });
  });
};
