const express = require("express");
const mneuService = require("../services/menu.service");
const upload = require("../util/upload");
const router = express.Router();


router.route('/:id')
    // .put((req,res,next) => {
    //     mneuService.update(req,res,next , req.params.id)
    // })
    .delete((req,res,next) => {
        mneuService.delete(req,res,next , req.params.id)
})

module.exports = router;
