'use strict'

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

exports.handler = (event, context, callback) => {
  const message = JSON.parse(event.Records[0].Sns.Message)
  const sourceBucket = message.Records[0].s3.bucket.name
  const sourceKey = decodeURIComponent(message.Records[0].s3.object.key.replace(/\+/g, ' '))

  const params = {
    Bucket: sourceBucket,
    Key: sourceKey,
    ACL: 'public-read'
  }

  console.log('>>> putObjectAcl', params)

  s3.putObjectAcl(params, (err, data) => {
    if (err) {
      callback(err)
    }
  })
}
