const express = require("express");
const roomService = require("../services/room.service");
const upload = require("../util/upload");
const router = express.Router();


router.route('/:id')
    // .put((req,res,next) => {
    //     mneuService.update(req,res,next , req.params.id)
    // })
    .delete((req,res,next) => {
        roomService.delete(req,res,next , req.params.id)
    })

module.exports = router;
