process.env.NODE_ENV = process.env.NODE_ENV || "development"

var express = require('./config/express');

var index = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/users');
var courses = require('./routes/courses');
var links = require('./routes/links');
var todos = require('./routes/todos');
// var todoController = require('./controllers/todoController');

var app = express();

app.use('/', index);
app.use('/about', about);
app.use('/users', users);
app.use('/courses', courses);
app.use('/links', links);
app.use('/todos', todos);

app.get('/users/:uId/books/:bId', function (req, res) {
})

var error = require('./config/error_handler');
error(app);

module.exports = app;

// port=27017
// host=amutiara-cs3051-5326061

// sudo apt-get install -y mongodb-org
// mongod --bind_ip=$IP --nojournal