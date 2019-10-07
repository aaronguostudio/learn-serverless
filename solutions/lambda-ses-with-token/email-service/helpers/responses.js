'use strict'

module.exports.success = ({ body, statusCode }) => {
  return {
    statusCode: statusCode || 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: body ? JSON.stringify(body) : null
  }
}

module.exports.error = (err) => {
  return {
    statusCode: err.statusCode || 500,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: err.message || 'Uknown Error'
    })
  }
}
