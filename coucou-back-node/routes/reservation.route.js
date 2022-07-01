const express = require("express");
const reservationService = require("../services/reservation.service")
const checkAuthentication = require("../util/check-authentication");
const router = express.Router();

router.route('/')
    // .get((req, res, next) => {
    //     reservationService.getAll(req, res, next);
    // })
    .post(checkAuthentication, (req, res, next) => {
        reservationService.add(req, res, next);
})

router.route('/client')
    .post(checkAuthentication, (req, res, next) => {
        reservationService.getByClient(req, res, next);
})

router.route('/search')
    .post((req, res, next) => {
        reservationService.getAll(req, res, next);
})

router.route('/state')
    .put((req, res, next) => {
        reservationService.updateState(req, res, next);
})

router.route('/canceled')
    .put((req, res, next) => {
        reservationService.updateCanceled(req, res, next);
    })

router.route('/:id')
    .get((req, res, next) => {
        reservationService.getOne(req, res, next, req.params.id);
})

//
// router.route('/today')
//     .get((req, res, next) => {
//             reservationService.getTodayReservations(req, res, next);
//     })


module.exports = router;
