var request = require("request");
var express = require('express');
var path = require('path');
var router = express.Router();

const {WidgetRepo} = require('../repo/widgets.js');
var repo = new WidgetRepo();

module.exports = (router) => {

  console.log("adding", __filename)

  router.get('/', function(req, res) {
    res.render('index', { title: 'home home', url: 'http://www.sarcastico.net/' });
  });


  router.get('/page1', function(req, res) {
    res.render('page1', { title: 'page1 page1', url: 'http://www.sarcastico.net/' });
  });

  router.post('/page2', function(req, res) {
    log.debug('looking up symbol : ', req.body.stocksymbol);
    log.error('error... looking up symbol : ', req.body.stocksymbol);
    var stockurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" +
      req.body.stocksymbol+ "%22)&env=store://datatables.org/alltableswithkeys";

    request.get(stockurl, function (err, resp, body) {
      if (!err) {
          resultsObj = body;
          console.log(resultsObj);
          res.render('page2', { title: req.body.stocksymbol, url: stockurl, stockdata: resultsObj });
      }
    });
  });

  router.get('/page2', function(req, res) {
    res.render('page2', { title: 'page2 page2', url: 'http://www.google.com' });
  });

  router.get('/widgets', function(req, res) {
    repo.all(req.db, (err, results) => {
      res.render('widgets', { title: 'widgets', widgets: results });
    });
  });

  router.get('/widgets/:widgetid', function(req, res) {
    var widgetid = req.params.widgetid;
    repo.getByID(widgetid, req.db, (err, result) => {
      res.render('page2', { title: 'widget', widget: result });
    });
  });
};
