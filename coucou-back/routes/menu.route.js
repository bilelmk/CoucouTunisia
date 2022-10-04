const express = require("express");
const menuService = require("../services/menu.service");
const upload = require("../util/upload");
const router = express.Router();

router.route( '/')
    .post(upload ,(req,res,next) => {
        menuService.add(req,res,next)
    })
    .put((req,res,next) => {
        menuService.update(req,res,next)
})

router.route('/:id/image')
    .put(upload,(req,res,next)=> {
        menuService.changeImage(req,res,next, req.params.id)
})

router.route('/:id')
    .delete((req,res,next) => {
        menuService.delete(req,res,next , req.params.id)
})

module.exports = router;
