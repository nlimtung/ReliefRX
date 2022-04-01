const ShiftModel = require('../models/shift.js'); 
const multer = require('multer');



// const multer = require('multer');

// const storage = multer.diskStorage({

//   destination: './public/uploads/images',
//   filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + 
//   path.extname(file.originalname));
//   }
// });



// S3_BASE_URL = 'https://s3.ca-central-1.amazonaws.com/'
// BUCKET = process.env.AWS_STORAGE_BUCKET_NAME;


// const S3_BUCKET =process.env.AWS_STORAGE_BUCKET_NAME;
// const REGION ="ca-central-1";
// const ACCESS_KEY =process.env.AWS_S3_ACCESS_KEY_ID;
// const SECRET_ACCESS_KEY =process.env.YOUR_SECRET_ACCESS_KEY;

// const config = {
//     bucketName: S3_BUCKET, 
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey:SECRET_ACCESS_KEY,
// }


async function newImage (req, res) {
    try {
      console.log ("hello")
        let arr = []
        const s3 = new AWS.S3({
            accessKeyID: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.YOUR_SECRET_ACCESS_KEY
        })
        for(image in req.files){
            let file = req.files[image].file
            let fileStream = fs.createReadStream(file);
            let key = req.files[image].uuid+'.jpeg'
            let url = `${S3_BASE_URL}${BUCKET}/${key}`
            arr.push(url)
            let params = {
                Bucket: BUCKET,
                Key: key,
                Body: fileStream
            }
            s3.upload(params, function(err, data){
                if (err){
                    console.log(err)
                } else {
                    return false
                }
            })
        }
        res.status(200).json(arr)

    } catch (err){
        res.status(400).json(err)
    }
}




module.exports = {
    newImage
}