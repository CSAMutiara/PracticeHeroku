// users model

var mongoose = require('mongoose')
var courses = require('./courses');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    login: {type: String, required: true},
    password: String,
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course'}]
});

UserSchema.methods.generateNewPassword = function(cb) {
    this.password = 'new'
    this.save(cb)
}

module.exports = mongoose.model('User', UserSchema);
