const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then(result => {
//   console.log(result)
// })

Todo.findOneAndRemove({ _id: '59e11f1d95cdf7d32fdd5586' }).then(todo => {
  console.log(todo)
})

Todo.findByIdAndRemove('59e11f1d95cdf7d32fdd5586').then(todo => {
  console.log(todo)
})
