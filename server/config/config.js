const env = process.env.NODE_ENV || 'development'
const db = require('./../db/dbConfig.js')

if (env === 'development') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if (env === 'test') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
} else if (env === 'production') {
  process.env.MONGODB_URI = `mongodb://${db.user}:${db.pw}@ds117605.mlab.com:17605/tododb`
}
