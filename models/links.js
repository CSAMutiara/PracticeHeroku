// links model

var mongoose = require('mongoose')
var links = require('./links');
var Schema = mongoose.Schema;
var LinkSchema = new Schema({
    name: String,
    item: String
});

LinkSchema.methods.generateNewPassword = function(cb) {
    this.password = 'new'
    this.save(cb)
}

module.exports = mongoose.model('Link', LinkSchema);
