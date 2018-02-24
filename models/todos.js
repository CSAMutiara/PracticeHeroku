// todo model

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
    item: String,
});

TodoSchema.methods.generateNewPassword = function(cb) {
    this.password = 'new'
    this.save(cb)
}

module.exports = mongoose.model('Todos', TodoSchema);
