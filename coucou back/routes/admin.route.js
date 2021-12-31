const express = require("express");
const adminService = require("../services/admin.service")
const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        adminService.add(req, res, next);
    })
    .get((req, res, next) => {
        adminService.getAll(req, res, next);
    });

router.route('/:id')
    .delete((req, res, next) => {
        adminService.delete(req, res, next , req.params.id ) ;
    })
    .put((req, res, next) => {
        adminService.update(req, res, next , req.params.id ) ;
    })

router.route('/signin')
    .post((req, res, next) => {
        adminService.signin(req, res, next , req.params.id ) ;
    })

router.route('/block/:id')
    .put((req, res, next) => {
        adminService.block(req, res, next, req.params.id );
    });

router.route('/deblock/:id')
    .put((req, res, next) => {
        adminService.deblock(req, res, next, req.params.id );
    });

module.exports = router;
