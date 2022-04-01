const express = require('express');
const router = express.Router();
const ImageCtrl = require('../../controllers/images');
const multer = require("multer")
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const bucketName =process.env.AWS_STORAGE_BUCKET_NAME;
const region ="ca-central-1";
const accessKey =process.env.AWS_S3_ACCESS_KEY_ID;
const secretAccessKey =process.env.YOUR_SECRET_ACCESS_KEY;


const s3 = new S3({
    region, 
    accessKey, 
    secretAccessKey

})

 function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams = {
        Bucket: bucketName, 
        Body: fileStream, 
        Key: file.filename
    }
    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile





const upload = multer({dest: 'uploads'})
router.post('/create', upload.single("file"), async function(req, res, next) {
    console.log(req.file)
    const result = await uploadFile(req.file)
    console.log(result.key)
})


module.exports = router;