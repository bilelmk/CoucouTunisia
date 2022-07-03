const express = require("express");
const galleryService = require("../services/gallery.service");
const upload = require("../util/upload");
const router = express.Router();

router.route('/')
    .post(upload,(req,res,next) => {
        galleryService.add(req,res,next)
    })

router.route('/:id')
    .delete((req,res,next) => {
        galleryService.delete(req,res,next , req.params.id)
    })

module.exports = router;
