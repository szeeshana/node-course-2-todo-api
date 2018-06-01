var mongoose = require('mongoose');//http://mongoosejs.com/docs/guide.html

mongoose.Promise = global.Promise; // Using def promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};