var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', {
    useMongoClient: true
});

var connection = mongoose.connection;

//Create a schema - this is like a blueprint
var linkSchema = new mongoose.Schema({
    name: String,
    item: String
});

//model
var Link = mongoose.model('Link', linkSchema);

// var data = [{item: 'make bed'}, {item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/link', function(req, res){
        //get data from mongodb and pass it to view
        Link.find({}, function(err, data){
            if (err) throw err;
            res.render('link', {links: data});
        });
    });
    
    app.post('/link', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newLink = Link(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });
    
    app.delete('/link/:name', function(req, res){
        //delete the requested item from mongodb
        Link.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
    
};