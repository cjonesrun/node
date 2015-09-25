var request = require("request");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'home home', url: 'http://www.sarcastico.net/' });
});


router.get('/page1', function(req, res) {
  res.render('page1', { title: 'page1 page1', url: 'http://www.sarcastico.net/' });
});

router.post('/page2', function(req, res) {
  console.log('symbol : ' + req.body.stocksymbol);
  var stockurl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" +
    req.body.stocksymbol+ "%22)&env=store://datatables.org/alltableswithkeys";
  
  request.get(stockurl, function (err, resp, body) {
    if (!err) {
        resultsObj = body;
        console.log(resultsObj);
        res.render('page2', { title: req.body.stocksymbol, url: stockurl, stockdata: resultsObj });
    }
  });

//  console.log(resultsObj);

  //res.render('page2', { title: req.body.stocksymbol, url: 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22HSBA.L%22)&env=store://datatables.org/alltableswithkeys', stockdata: resultsObj });
});

router.get('/page2', function(req, res) {
  res.render('page2', { title: 'page2 page2', url: 'http://www.sarcastico.net/' });
});

router.get('/page3', function(req, res) {
  res.render('page3', { title: 'page3 page3', url: 'http://www.sarcastico.net/' });
});

router.get('/page4', function(req, res) {
  res.render('page4', { title: 'page4 page4', url: 'http://www.sarcastico.net/' });
});

router.get('/test', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
	res.json(docs);
    });
});

module.exports = router;
