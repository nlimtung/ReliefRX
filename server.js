const express = require('express');


const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


const S3 = require('aws-sdk/clients/s3')




const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



const app = express();


app.use(logger('dev'));
app.use(express.json());




require('dotenv').config();
require('./config/database.js') ;


if (process.env.NODE_ENV === 'production' || process.env.PREVIEW === 'true') {
    app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'build')));
}
  


app.use('/api/users', require('./routes/api/users.js'));
app.use(require('./config/auth'));
app.use('/api/shifts', require('./routes/api/shifts.js'));
app.use('/api/images', require('./routes/api/images.js'));


// app.post("/api/images", upload.single('file'), function (req, res, next) {
//     console.log(req.body);
// })

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});