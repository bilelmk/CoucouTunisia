const multer = require('multer');
const MIME_TYPE_MAP = require('../util/mime-type');
const fs = require('fs') ;
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "upload/");
    },
    filename: (req, file, cb) => {
        // const name = file.originalname
        //     .toLowerCase()
        //     .split(" ")
        //     .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, uuid.v1() + "." + ext);
    }
});

module.exports = multer({storage: storage}).fields([{ name: 'image', maxCount: 1 }, { name: 'menuImages' },{name:'roomImages'}])
