const express = require("express");
const mailService = require("../services/mail.service")
const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        mailService.sendOne(req, res, next);
    })

module.exports = router;

