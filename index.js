"use strict";

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const srcBucket = "syc-file-bucket";
const destBucket = "syc-file-copy-bucket";
const sourceObject = "test.png";

exports.handler = async function(event, context, callback) {
  s3.copyObject({
    CopySource: srcBucket + '/' + sourceObject,
    Bucket: destBucket,
    Key: sourceObject
  }, (copyErr, copyData) => {
    if (copyErr) {
      console.log("Error: " + copyErr);
    } else {
      console.log("Copied ok");
    }
  })
  callback(null, 'All done')
};
