const express = require("express");
const planningService = require("../services/planning.service")
const router = express.Router();


router.route('/:id')
    .put((req, res, next) => {
        planningService.update(req, res, next, req.params.id);
})

module.exports = router;
