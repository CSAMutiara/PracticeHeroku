// users controller
var config = require('../config');
var User = require('../models/users');
var Course = require('../models/courses');
var Link = require('../models/links');
var Todo = require('../models/todos');

exports.getAll = function(callback) {
    config.db(function (err, db) {
        if (err) throw err
        db.collection('users').find().toArray(function (err, result) {
            if (err) throw err
            callback(result)
        })
    })
}

exports.list= function(req, res, next) {
    console.log('in')
    User.find({})
        .populate('courses')
        .exec(function (err, result) {
            console.log('db')
        if (err) return next(err)
        res.render('users',
            { 'title': 'Express', 'data': result })
    })
}

exports.list= function(req, res, next) {
    console.log('in')
    User.find({})
        .populate('links')
        .exec(function (err, result) {
            console.log('db')
        if (err) return next(err)
        res.render('users',
            { 'title': 'Express', 'data': result })
    })
}

exports.list= function(req, res, next) {
    console.log('in')
    User.find({})
        .populate('todos')
        .exec(function (err, result) {
            console.log('db')
        if (err) return next(err)
        res.render('users',
            { 'title': 'Express', 'data': result })
    })
}

/* User.findOne({login: 'student'}, function(err, user) {
    user.generateNewPassword(function(err) { 
        this.password = 'new'
        this.save(err)
    })
) */

