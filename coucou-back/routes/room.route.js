const express = require("express");
const roomService = require("../services/room.service");
const upload = require("../util/upload");
const menuService = require("../services/menu.service");
const router = express.Router();

router.route('/')
    .post(upload,(req,res,next) => {
        roomService.add(req,res,next)
    })
    .put((req,res,next) => {
        roomService.update(req,res,next)
})

router.route('/:id/image')
    .put(upload,(req,res,next)=> {
        roomService.changeImage(req,res,next, req.params.id)
})

router.route('/:id')
    .delete((req,res,next) => {
        roomService.delete(req,res,next , req.params.id)
})

module.exports = router;
