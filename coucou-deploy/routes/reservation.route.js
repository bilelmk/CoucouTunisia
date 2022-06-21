const express = require("express");
const reservationService = require("../services/reservation.service")
const router = express.Router();


router.route('/')
    .get((req, res, next) => {
        reservationService.getAll(req, res, next);
    })
    .post((req, res, next) => {
        reservationService.add(req, res, next);
    })

// router.route('/:id')
//     .put((req, res, next) => {
//         permissionService.update(req, res, next , req.params.id);
//     })
//     .delete((req, res, next) => {
//         permissionService.delete(req, res, next, req.params.id);
//     })

module.exports = router;
