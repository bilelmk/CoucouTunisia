const multer = require('multer');
const MIME_TYPE_MAP = require('../util/mime-type');
const fs = require('fs') ;
const uuid = require('uuid');
const path=require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, path.resolve(__dirname, "../upload/"));
    },
    filename: (req, file, cb) => {
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, uuid.v1() + "." + ext);
    }
});

module.exports = multer({storage: storage ,  limits: { fieldSize: 25 * 1024 * 1024 }}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'menuImages' },
    { name: 'roomImages' },
    { name: 'restaurantImages' }
])
