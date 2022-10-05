const express = require("express");
const rateService = require("../services/rate.service")
const checkAuthentication = require("../util/check-authentication");
const router = express.Router();

router.route('/restaurant/:restaurantId')
    .get((req,res,next) => {
        rateService.getAllByRestaurant(req,res,next,req.params.restaurantId)
})

router.route('/:restaurantId')
    .get( checkAuthentication, (req,res,next) => {
        rateService.getByRestaurantAndClient(req,res,next,req.params.restaurantId)
})

router.route('/')
    .post((req,res,next) => {
        rateService.add(req,res,next)
    })
    .put((req,res,next) => {
        rateService.update(req,res,next)
})

router.route('/:id')
    .delete((req,res,next) => {
        rateService.delete(req,res,next,req.params.id)
})

module.exports = router;
