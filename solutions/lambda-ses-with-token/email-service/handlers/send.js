'use strict'

const AWS = require('aws-sdk')
const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1'
})

const { success, error } = require('../helpers/responses')
const sourceEmail = 'aaron@kudosee.com'

module.exports.handler = async event => {
  try {
    const body = JSON.parse(event.body) || {}
    let {
      templateName,
      to,
      content
    } = body

    templateName = templateName && templateName.trim()
    to = to && to.trim()

    if (!templateName || !to) {
      const err = new Error('templateName and to are all required')
      err.statusCode = 400
      throw err
    }

    const senders = to.split(',')
    const sendersUniq = [...new Set(senders)]

    const params = {
      Template: templateName,
      Destination: {
        ToAddresses: sendersUniq
      },
      Source: sourceEmail,
      TemplateData: JSON.stringify(content || {})
    }

    const res = await ses.sendTemplatedEmail(params).promise()
    return success({
      body: res,
      statusCode: 200
    })
  } catch (err) {
    return error(err)
  }
}
