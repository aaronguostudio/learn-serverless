'use strict'
const AWS = require('aws-sdk')

const elasticTranscoder = new AWS.ElasticTranscoder({
  region: 'us-east-1'
})

exports.handler = (event, context, callback) => {
  console.log('> Hello World')

  const key = event.Records[0].s3.object.key
  const sourceKey = decodeURIComponent(key.replace(/\+/g, ' '))
  const outputKey = sourceKey.split('.')[0]

  const params = {
    PipelineId: '1569820446484-5u00y6',
    Input: {
      Key: sourceKey
    },
    Outputs: [
      // {
      //     Key: outputKey + '-1080p' + '.mp4',
      //     PresetId: '1351620000001-000001' //Generic 1080p
      // },
      // {
      //     Key: outputKey + '-720p' + '.mp4',
      //     PresetId: '1351620000001-000010' //Generic 720p
      // },
      // {
      //     Key: outputKey + '-web-720p' + '.mp4',
      //     PresetId: '1351620000001-100070' //Web Friendly 720p
      // }
      {
          Key: outputKey + '-web-480p' + '.mp4',
          PresetId: '1351620000001-000020'
      }
    ]
  }

  elasticTranscoder.createJob(params, (err, data) => {
    if (err) {
      console.log(err)
    }
  })
}
