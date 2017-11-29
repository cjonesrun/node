var request = require("request");
var express = require('express');
var router = express.Router();

const {WidgetRepo} = require('../repo/widgets.js');
var repo = new WidgetRepo();

module.exports = (router) => {
  console.log("adding", __filename);
  router.get('/rest/widgets', function(req, res) {
    repo.all(req.db, (err, results) => {
        res.json(results);
    });
  });

  router.get('/rest/widgets/:widgetid', function(req, res) {
    var widgetid = req.params.widgetid;
    repo.getByID( widgetid, req.db, (err, json) => {
      if (json != null)
        res.json(json);
      else
        res.json({});
    });
  });
};
