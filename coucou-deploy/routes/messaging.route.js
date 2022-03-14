const express = require("express");
const messagingService = require("../services/messaging.service")
const router = express.Router();

router.route('/one')
    .post( (req, res, next) => {
        messagingService.sendOneSms(req, res, next)
    })

module.exports = router;
