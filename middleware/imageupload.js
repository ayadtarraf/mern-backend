import path from "path";
import multer from "multer";

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
       cb(null, 'public/images/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname) 
        cb(null, file.originalname)
    }
})

const imageUpload = multer ({
  storage: imageStorage,
  fileFilter: function(req, file, callback) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg"  ||
      file.mimetype == "image/jpeg" 
    ){
      callback(null, true)
    }else {
      console.log('only jpg & png file supported')
      callback (null, false)
    }
  }
})

export default imageUpload ;