const express = require("express");
const permissionService = require("../services/permission.service")
const router = express.Router();


router.route('/')
    .get((req, res, next) => {
        permissionService.getAll(req, res, next);
    })
    .post((req, res, next) => {
        permissionService.add(req, res, next);
    })
    .put((req, res, next) => {
        permissionService.update(req, res, next );
})

router.route('/:id')
    .delete((req, res, next) => {
        permissionService.delete(req, res, next, req.params.id);
})

module.exports = router;
