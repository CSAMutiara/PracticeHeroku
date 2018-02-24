// users router
var express = require('express');
var router = express.Router();

var users = require('../controllers/users')
router.get('/', users.list)

router.get('/', function(req, res, next) {
    var config = require('../config')
    config.db(function (err, db) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', function (err, db) {
            if (err) throw err
                db.collection('users').find().
                toArray(function (err, result) {
                if (err) throw err
                    res.render('users', { 'title': 'Express', 'data': result });
            })
        })
    })
});
    
module.exports = router;


