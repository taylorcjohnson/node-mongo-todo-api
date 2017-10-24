const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
})

// Instance methods on the methods property
UserSchema.methods.toJSON = function() {
  let user = this
  let userObject = user.toObject()

  return _.pick(userObject, ['_id', 'email'])
}

UserSchema.methods.generateAuthToken = function() {
  let user = this
  let access = 'auth'
  let token = jwt
    .sign({ _id: user._id.toHexString(), access }, 'abc123')
    .toString()

  user.tokens.push({ access, token })

  return user.save().then(() => {
    return token
  })
}

// Model methods on the statics property
UserSchema.statics.findByToken = function(token) {
  let User = this
  let decoded

  try {
    decoded = jwt.verify(token, 'abc123')
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
}

const User = mongoose.model('User', UserSchema)

module.exports = { User }
