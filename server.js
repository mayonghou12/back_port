let express = require('express')
let router = require('./controller')

let multer = require('multer')

let path = require('path')

let app = express()

app.use(express.static(__dirname + '/uploader'))

// 上传图片的参数处理 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploader')
    },
    filename: function (req, file, cb) {
        var originalname = file.originalname
        var parsePath = path.parse(originalname)
        cb(null, file.fieldname + '_' + Date.now() + parsePath.ext)
    }
})

var uploaderMulter = multer({storage: storage})

app.post('/upload', uploaderMulter.array('file', 8), router.upload)

// 上传图片的信息
app.get('/setImgData', router.setImgData)
   .post('/setImgData', router.setImgData)


   
app.listen(3000)