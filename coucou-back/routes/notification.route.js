const express = require("express");
const notificationService = require("../services/notification.service")
const router = express.Router();

router.route('/multi')
    .post( (req, res, next) => {
        notificationService.sendMulti(req, res, next)
    })

module.exports = router;
