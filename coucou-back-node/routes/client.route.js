const express = require("express");
const clientService = require("../services/client.service")
const router = express.Router();
const checkAuthentication = require('../util/check-authentication')
const upload = require("../util/upload");

router.route('/signup')
    .post((req, res, next) => {
        clientService.signup(req, res, next);
})

router.route('/signin')
    .post((req, res, next) => {
        clientService.signin(req, res, next);
})

router.route('/check-phone-verification-code')
    .post((req, res, next) => {
        clientService.checkPhoneVerificationCode(req, res, next);
})

router.route('/check-reset-password-code')
    .post((req, res, next) => {
        clientService.checkResetPasswordCode(req, res, next);
})

router.route('/send-reset-password-code')
    .post((req, res, next) => {
        clientService.sendResetPasswordCode(req, res, next);
})

router.route('/reset-password')
    .post((req, res, next) => {
        clientService.resetPassowrd(req, res, next);
})

router.route('/')
    .post( (req, res, next) => {
            clientService.getMany(req, res, next);
    })
    .get(checkAuthentication ,(req, res, next) => {
            clientService.getOne(req, res, next);
    })
    .put(checkAuthentication ,(req, res, next) => {
            clientService.update(req, res, next);
})

router.route('/lower')
    .get((req, res, next) => {
        clientService.getAllLower(req, res, next);
})

router.route('/block/:id')
    .put((req, res, next) => {
        clientService.block(req, res, next, req.params.id);
})

router.route('/deblock/:id')
    .put((req, res, next) => {
        clientService.deblock(req, res, next, req.params.id);
})

router.route('/image')
    .put(checkAuthentication , upload,(req, res, next) => {
            clientService.changeImage(req, res, next);
})

module.exports = router;
