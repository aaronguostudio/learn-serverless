'use strict';

const AWS = require('aws-sdk')
const uuidv4 = require('uuid/v4')
const s3 = new AWS.S3({
  signatureVersion: 'v4',
})
const bucket = process.env.BUCKET_NAME
const allowTypes = ['jpg', 'jpeg', 'png']
const allowPaths = ['avatars', 'companies']

module.exports.sign = async event => {
  const { type, path = 'default' } = event.queryStringParameters
  return await getUploadUrl(type, path)
}

const getUploadUrl = async function (imageType, path) {
  const actionId = uuidv4()
  if (!allowTypes.includes(imageType)) {
    return {
      statusCode: 403,
      body: JSON.stringify('Only jpg, jpeg and png are supported')
    }
  }
  if (!allowPaths.includes(path)) {
    return {
      statusCode: 403,
      body: JSON.stringify('Only path of avatars and companies are allowed')
    }
  }
  const params = {
    Bucket: bucket,
    Key: `${path}/${actionId}.${imageType}`,
    ContentType: 'image/*',
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
            filename: `/avatars/${actionId}.${imageType}`
        })
      })
    } catch (err) {
      console.log('> uploading error', err)
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
