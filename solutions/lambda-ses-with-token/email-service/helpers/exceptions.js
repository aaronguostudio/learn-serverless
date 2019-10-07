'use strict'

module.exports.notFound = () => {
  const err = new Error('Not Found')
  err.statusCode = 404
  return err
}
