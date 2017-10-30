const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')
const { Todo } = require('./../../models/todo')
const { User } = require('./../../models/user')

const userOneId = new ObjectId()
const userTwoId = new ObjectId()
const users = [
  {
    _id: userOneId,
    email: 'bob@example.com',
    password: 'userOnePass',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'john@example.com',
    password: 'userTwoPass',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString()
      }
    ]
  }
]

const populateUsers = done => {
  User.remove({})
    .then(() => {
      let userOne = new User(users[0]).save()
      let userTwo = new User(users[1]).save()

      return Promise.all([userOne, userTwo])
    })
    .then(() => done())
}

const todos = [
  {
    _id: new ObjectId(),
    text: 'first test todo',
    _creator: userOneId
  },
  {
    _id: new ObjectId(),
    text: 'second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
]

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos)
    })
    .then(() => done())
}

module.exports = { users, populateUsers, todos, populateTodos }
