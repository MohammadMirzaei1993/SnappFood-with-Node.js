const multer = require('multer');
const path = require('path');
const {uploadFilepath} = require('./utils');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFilepath())
    },

    filename: function (req, file, cb) {
      const fileType = path.extname(file.originalname)
      cb(null, Date.now() + fileType)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = {upload}