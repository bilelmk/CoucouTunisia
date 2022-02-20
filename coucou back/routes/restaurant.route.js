const express = require("express");
const restaurantService=require("../services/restaurant.service");
const upload = require("../util/upload");
const router = express.Router();

const socket = require("../util/socket")

router.route('/')
    // .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get((req,res,next) => {
        restaurantService.getAll(req,res,next)
    })
    .post(upload,(req, res, next) => {
        restaurantService.add(req,res,next)
})


router.route('/lite')
    .get((req,res,next) => {
        restaurantService.getAllLite(req,res,next)
    })

router.route('/:id')
    .get((req,res,next) => {
        restaurantService.getOne(req,res,next , req.params.id)
})

module.exports = router;
