const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.facebookRegister = function () {

}

exports.googleRegister = function () {

}

exports.register = function (req , res) {
    bcrypt.hash(req.body.password, 10).then(hash => {
        User.create(
            {
                firstname: req.body.email,
                lastname: hash ,
                email :req.body.username,
                password :req.body.firstname,
                phone :req.body.lastname,
                image : req.body.place,
                verified :req.body.longitude,
                active : req.body.latitude,
                signupSource: req.body.comment,
            }
        ).then(result => {
            res.status(201).json({
                message: "User created!",
                result: result
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
    });
}
