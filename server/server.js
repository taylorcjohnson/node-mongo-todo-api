const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { ObjectId } = require('mongodb')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

let app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({ text: req.body.text })

  todo.save().then(
    doc => {
      res.send(doc)
    },
    e => {
      res.status(400).send(e)
    }
  )
})

app.get('/todos', (req, res) => {
  Todo.find().then(
    todos => {
      res.status(200).send({ todos })
    },
    e => {
      res.status(400).send(e)
    }
  )
})

// GET /todos/{{id}}
app.get('/todos/:id', (req, res) => {
  let id = req.params.id

  if (!ObjectId.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(req.params.id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send()
      }
      res.status(200).send({ todo })
    })
    .catch(e => {
      res.status(400).send(e)
    })
})

app.listen(port, () => {
  console.log(`Started on port: ${port}`)
})

module.exports = {
  app
}
