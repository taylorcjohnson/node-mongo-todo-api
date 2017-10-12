let mongoose = require('mongoose')
let db = require('./dbConfig.js')

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${db.user}:${db.pw}@ds117605.mlab.com:17605/tododb`)
//mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = { mongoose }
