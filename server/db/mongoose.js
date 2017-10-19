let mongoose = require('mongoose')
let db = require('./dbConfig.js')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI)

module.exports = { mongoose }
