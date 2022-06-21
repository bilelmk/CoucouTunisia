const express = require("express");
const menuService = require("../services/menu.service");
const upload = require("../util/upload");
const router = express.Router();

router.route(upload, '/')
    .post((req,res,next) => {
        menuService.add(req,res,next)
})

router.route('/:id')
    .delete((req,res,next) => {
        menuService.delete(req,res,next , req.params.id)
})

module.exports = router;
