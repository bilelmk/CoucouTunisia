const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin.model");

exports.signin = async ( req, res , next ) => {
    let admin = await Admin.findOne( {where: { username: req.body.username }}) ;
    if(admin){
        let checkPassword = await bcrypt.compare(req.body.password, admin.password) ;
        if(!checkPassword){
            res.status(401).json({
                message: "wrong password"
            });
        }
        else {
            let active = await admin.active ;
            if(active){
                const token = await jwt.sign(
                    { username: admin.username, id: admin.id , role: admin.role},
                    "secret_this_should_be_longer",
                    { expiresIn: "5h" }
                );
                res.status(200).json({
                    token: token,
                    expiresIn: 18000
                });
            }
            else {
                res.status(401).json({
                    message: "account deactivated" ,
                });
            }
        }
    }
    else {
        res.status(401).json({
            message: "wrong username"
        });
    }
}

exports.add = async ( req, res , next ) => {
    let admin = await Admin.findOne({ where: { username: req.body.username }})
    if(!admin) {
        bcrypt.hash(req.body.password, 10).then(hash => {
            req.body.password = hash
            req.body.role = 'ADMIN'
            req.body.active = true
            Admin.create(req.body).then(result => {
                res.status(200).json(
                    result
                );
            }).catch(err => {
                res.status(500).json({
                    message: "server error"
                });
            });
        })
    }
    else {
        return res.status(405).json({
            message: "existing email"
        });
    }
}

exports.login = ( req, res , next ) => {
    let fetchedUser;
    Admin.findOne( {where: { username: req.body.username }}).then(user => {
        fetchedUser = user.dataValues ;
        return bcrypt.compare(req.body.password, fetchedUser.password);
    }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: "wrong password"
            });
        }
        if (fetchedUser.active === false) {
            return res.status(401).json({
                message: "blocked account"
            });
        }
        const token = jwt.sign(
            { username: fetchedUser.username, userId: fetchedUser.id },
            "secret_this_should_be_longer",
            { expiresIn: "1h" }
        );
        res.status(200).json({
            token: token,
            expiresIn: 3600
        });
    })
    .catch(err => {
        return res.status(401).json({
            message: "wrong email"
        });
    });
}

exports.delete = ( req, res , next , adminId) => {
    Admin.destroy({ where: { id: adminId }}).then(result => {
        return res.status(200).json(
            result
        );
    }).catch(err => {
        return res.status(404).json({
            message: err
        });
    })
}

exports.getAll = ( req, res , next ) => {
    Admin.findAll().then(result =>{
        return res.status(200).json(
            result
        );
    }).catch(err => {
        return res.status(404).json({
            message: "no records"
        });
    })
}

exports.update = ( req, res , next ) => {
    Admin.update({ firstname: req.body.firstname ,
                   lastname: req.body.lastname,
                   username: req.body.username },
                 { where: { id: req.body.firstname }})
    .then(result => {
        if(result[0] === 1){
            return res.status(200).json({
                message: "success"
            });
        }
        return res.status(404).json({
            message: "not found"
        });
    }).catch(err => {
        return res.status(500).json({
            message: "server error"
        });
    })
}

exports.block = ( req, res , next , id ) => {
    Admin.update({ active: false }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json({
                message: "success"
            });
        }
        return res.status(404).json({
            message: "not found"
        });
    }).catch(err => {
        return res.status(500).json({
            message: "server error"
        });
    })
}

exports.deblock = ( req, res , next , id ) => {
    Admin.update({ active: true }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json({
                message: "success"
            });
        }
        return res.status(404).json({
            message: "not found"
        });
    }).catch(err => {
        return res.status(500).json({
            message: "server error"
        });
    })
}


