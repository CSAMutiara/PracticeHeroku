var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var config = require('../config')
    config.db(function (err, db) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', function (err, db) {
            if (err) throw err
                db.collection('links').find().
                toArray(function (err, result) {
                if (err) throw err
                    res.render('links', { 'title': 'Express', 'data': result });
            })
        })
    })
});
    
module.exports = router;


