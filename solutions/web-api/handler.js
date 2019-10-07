'use strict'

const { connect } = require('./db')
const User = require('./models/User')

module.exports.healthCheck = async () => {
  await connect()
  console.log('Connection successful.')
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Connection successful.' })
  }
}

module.exports.create = async (event) => {
  try {
    const body = JSON.parse(event.body)
    // TODO Validator
    const user = {
      firstName: body.firstName,
      lastName: body.lastName,
      userName: body.userName,
      password: body.password,
      email: body.email
    }
    const result = await User.create(user)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could destroy fetch the Note.'
    }
  }
}

module.exports.update = async (event) => {
  try {
    // TODO cherry pick allowed params
    // TODO Validator
    const body = JSON.parse(event.body)

    const result = await User.create(user)
  } catch (err) {

  }
}

module.exports.query = async (event) => {
  try {
    const users = await User.findAll()
    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could destroy fetch the Note.'
    }
  }
}

// simple Error constructor for handling HTTP error codes
function HTTPError (statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}
