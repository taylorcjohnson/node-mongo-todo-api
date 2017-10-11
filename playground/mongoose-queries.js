const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// let id = '59de3e681069418378678acd11'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo)
// })

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found')
//     }
//     console.log('Todo by ID', todo)
//   })
//   .catch(e => console.log(e))

User.findById('59a72b738c7eb2a75c943c5b').then(
  user => {
    if (!user) {
      return console.log('User not found')
    }
    console.log(JSON.stringify(user, undefined, 2))
  },
  e => console.log(e)
)
