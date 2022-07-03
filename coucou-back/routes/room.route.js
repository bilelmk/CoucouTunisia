const express = require("express");
const roomService = require("../services/room.service");
const upload = require("../util/upload");
const router = express.Router();

router.route('/')
    .post(upload,(req,res,next) => {
        roomService.add(req,res,next)
})

router.route('/:id')
    .delete((req,res,next) => {
        roomService.delete(req,res,next , req.params.id)
})

module.exports = router;
