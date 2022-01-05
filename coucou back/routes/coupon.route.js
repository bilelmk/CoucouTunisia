const express = require("express");
const couponService = require("../services/coupon.service")
const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        couponService.generate(req, res, next);
    })
    .get((req, res, next) => {
        couponService.getAll(req, res, next);
    });

module.exports = router;

