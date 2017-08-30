//const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  db
    .collection('Users')
    .find({
      name: 'Taylor'
    })
    .toArray()
    .then(
      users => {
        console.log('Users')
        console.log(JSON.stringify(users, undefined, 2))
      },
      err => {
        console.log('Unabled to fetch users', err)
      }
    )

  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log('Todos')
  //       console.log(`Todos count: ${count}`)
  //     },
  //     err => {
  //       console.log('Unabled to fetch todos', err)
  //     }
  //   )

  db.close()
})
