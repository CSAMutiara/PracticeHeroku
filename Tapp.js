var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
todoController(app);

//listen to port
app.listen(process.env.PORT, process.env.IP);
console.log('You are listening to port 3000');

// sudo apt-get install -y mongodb-org
// mongod --bind_ip=$IP --nojournal