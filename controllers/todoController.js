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
var todoSchema = new mongoose.Schema({
    item: String
});

//model
var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){

// var data = [{item: 'make bed'}, {item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
        
    });
    
    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });
    
    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
    
};