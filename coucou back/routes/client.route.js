const express = require("express");
const clientService = require("../services/client.service")
const router = express.Router();

const sms = require("../util/sms")

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


module.exports = router;
