const express = require("express");
const externalClientService = require("../services/external-client.service")
const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        externalClientService.addBulk(req, res, next);
    })
    .get((req, res, next) => {
        externalClientService.getAll(req, res, next);
    });

module.exports = router;

