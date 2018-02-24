var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient
    MongoClient.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', function (err, db) {
        if (err) throw err
            db.collection('users').find().
            toArray(function (err, result) {
            if (err) throw err
                res.render('users', { 'title': 'Express', 'data': result });
            })
        })
    });
    
    
