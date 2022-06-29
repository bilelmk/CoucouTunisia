const express = require("express");
const restaurantService = require("../services/restaurant.service");
const upload = require("../util/upload");
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        restaurantService.getAll(req, res, next)
    })
    .post(upload,(req, res, next) => {
        restaurantService.add(req,res,next)
})

router.route('/lite')
    .get((req, res, next) => {
        restaurantService.getAllLite(req, res, next)
})

router.route('/active')
    .get((req, res, next) => {
        restaurantService.getAllActive(req, res, next)
})

router.route('/:id')
    .get((req,res,next) => {
        restaurantService.getOne(req,res,next , req.params.id)
    })
    .put((req, res, next) => {
        restaurantService.updateRestaurant(req, res, next)
})

router.route('/block/:id')
    .put((req, res, next) => {
        restaurantService.block(req, res, next , req.params.id);
    })

router.route('/deblock/:id')
    .put((req, res, next) => {
        restaurantService.deblock(req, res, next , req.params.id);
    })

module.exports = router;
