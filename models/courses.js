// courses model

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var CourseSchema = new Schema({
    courseName: String,
});

CourseSchema.methods.generateNewPassword = function(cb) {
    this.password = 'new'
    this.save(cb)
}

module.exports = mongoose.model('Course', CourseSchema);
