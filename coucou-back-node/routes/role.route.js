const express = require("express");
const roleService = require("../services/role.service")
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        roleService.getAll(req, res, next);
    })
    .post((req, res, next) => {
        roleService.add(req, res, next);
    })
    .put((req, res, next) => {
         roleService.update(req, res, next );
})

router.route('/:id')
    .delete((req, res, next) => {
        roleService.delete(req, res, next, req.params.id);
})

router.route('/permissions/:id')
    .put((req, res, next) => {
        roleService.setPermissions(req, res, next ,req.params.id);
})

router.route('/restaurants/:id')
    .put((req, res, next) => {
        roleService.setRestaurants(req, res, next ,req.params.id);
})

module.exports = router;
