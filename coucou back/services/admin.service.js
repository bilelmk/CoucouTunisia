const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");
const Role = require("../models/role.model");
const Permission = require("../models/permission.model");

exports.signin = async ( req, res , next ) => {
    let admin = await Admin.findOne(
        { include: [{ model : Role , include: {model : Permission}}],
         where: { username: req.body.username }}
    );
    if(admin){
        let checkPassword = await bcrypt.compare(req.body.password, admin.password) ;
        if(!checkPassword)res.status(401).json({message: "wrong password"});
        else {
            let active = await admin.active ;
            if(active) {
                const token = await jwt.sign(
                    { username: admin.username, id: admin.id , role: admin.role},
                    "secret_this_should_be_longer",
                    { expiresIn: "5h" }
                );
                return res.status(200).json({token: token, expiresIn: 18000 , admin: admin});
            }
            else return res.status(401).json({message: "account deactivated" ,});
        }
    }
    else res.status(401).json({message: "wrong username"});
}

exports.add = async ( req, res , next ) => {
    let admin = await Admin.findOne({ where: { username: req.body.username }})
    let role = await Role.findByPk(req.body.roleId)
    if(!role) res.status(405).json({message: "role not found"});
    if(!admin) {
        let hash = await bcrypt.hash(req.body.password, 10)
        if(hash){
            req.body.password = hash
            req.body.active = true
            let savedAdmin = await Admin.create(req.body)
            if(savedAdmin){
                let result = {
                    ...savedAdmin.dataValues ,
                    role : role
                }
                return res.status(200).json(result);
            }
            else return res.status(500).json({message: "server error"});
        }
        else return res.status(500).json({message: "server error"});
    }
    else return res.status(405).json({message: "existing email"});
}

exports.delete = ( req, res , next , adminId) => {
    Admin.destroy({ where: { id: adminId }}).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json({message: err});
    })
}

exports.getAll = ( req, res , next ) => {
    Admin.findAll({include : ["role"]}).then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json({message: "no records"});
    })
}

exports.update = ( req, res , next , id ) => {
    Admin.update({ firstname: req.body.firstname ,
                   lastname: req.body.lastname,
                   username: req.body.username ,
                   roleId: req.body.roleId},
                 { where: { id: id }})
    .then(result => {
        if(result[0] === 1){
            return res.status(200).json(result);
        }
        return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json({message: "server error"});
    })
}

exports.block = ( req, res , next , id ) => {
    Admin.update({ active: false }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json({message: "success"});
        }
        return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json({message: "server error"});
    })
}

exports.deblock = ( req, res , next , id ) => {
    Admin.update({ active: true }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json({message: "success"});
        }
        return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json({message: "server error"});
    })
}


