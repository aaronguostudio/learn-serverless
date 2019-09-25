'use strict';

const AWS = require('aws-sdk')
const uuidv4 = require('uuid/v4')
const s3 = new AWS.S3()
const bucket = process.env.BUCKET_NAME

module.exports.sign = async event => {
  console.log('> Start...')
  const result = await getUploadUrl()
  console.log('> Result: ', result)
  return result
}

const getUploadUrl = async function () {
  console.log('getUploadURL started')

  const actionId = uuidv4()
  const params = {
    Bucket: bucket,
    Key: `${actionId}.jpg`,
    ContentType: 'image/jpg',
    CacheControl: 'max-age=31104000',
    ACL: 'public-read'
  }

  return new Promise((resolve, reject) => {
    try {
      const uploadUrl = s3.getSignedUrl('putObject', params)
      resolve({
        statusCode: 200,
        isBase64Encoded: false,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            uploadUrl,
            filename: `${actionId}.jpg`
        })
      })
    } catch (err) {

      console.log('> error', err)
      reject({
        statusCode: 500,
        isBase64Encoded: false,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(err)
      })
    }
  })
}
