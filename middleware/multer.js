const multer = require('multer') //multer helps us handl images uploading


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
         cb(null, `${Date.now()}.jpg`)
     
    }
  })
  
  const upload = multer({ storage })

  module.exports = upload