'use strict';

const AWS = require('aws-sdk')
const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1'
})

const { success, error } = require('../helpers/responses')

module.exports.handler = async event => {
  try {
    const body = JSON.parse(event.body) || {}
    let {
      name,
      subject,
      content
    } = body

    name = name && name.trim()
    subject = subject && subject.trim()
    content = content && content.trim()

    if (!name || !subject || !content) {
      const err = new Error('name, subject and content are all required')
      err.statusCode = 400
      throw err
    }

    const params = {
      Template: {
        TemplateName: name,
        HtmlPart: content,
        SubjectPart: subject
      }
    }

    const res = await ses.createTemplate(params).promise()
    return success({
      body: res,
      statusCode: 201
    })

  } catch (err) {
    return error(err)
  }
}
