let mongoose = require('mongoose')
let db = require('./dbConfig.js')

let port = process.env.PORT || 3000,
  mCon

mongoose.Promise = global.Promise

if (port === 3000) {
  mCon = 'mongodb://localhost:27017/TodoApp'
} else {
  mCon = `mongodb://${db.user}:${db.pw}@ds117605.mlab.com:17605/tododb`
}
//mongoose.connect(`mongodb://${db.user}:${db.pw}@ds117605.mlab.com:17605/tododb`)
//mongoose.connect('mongodb://localhost:27017/TodoApp')
mongoose.connect(mCon)

module.exports = { mongoose }
