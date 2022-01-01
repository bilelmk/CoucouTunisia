const Role = require("../models/role.model");

exports.getAll = ( req, res , next ) => {
    Role.findAll({include: ["permissions" , "restaurants"]}).then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json({
            message: "no records"
        });
    })
}

exports.add = ( req, res , next ) => {
    Role.create(req.body).then(role => {
        return res.status(200).json(role);
    }).catch(err => {
        return res.status(500).json({
            message: err
        });
    })
}

exports.delete = ( req, res , next , id) => {
    Role.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({
            message: err
        });
    })
}

exports.update = async (req, res , next , id) => {
    Role.update({ name: req.body.name , description: req.body.description}, {
        where: { id: id }
    }).then(result => {
        if(result[0]) {
            return res.status(200).json(
                result
            );
        }
        else {
            return res.status(404).json({
                message: "not found"
            });
        }
    }).catch(err => {
        return res.status(404).json({
            message: err
        });
    })
}

exports.setPermissions = async (req, res, next , id) => {
    let role = await Role.findByPk(id) ;
    if(role){
        role.setPermissions(req.body).then(result => {
                return res.status(200).json(
                    result
                );
        }).catch(err => {
            return res.status(500).json({
                message: err
            });
        })
    } else {
        return res.status(404).json({
            message: "not found !"
        });
    }
}

exports.setRestaurants = async (req, res, next , id) => {
    let role = await Role.findByPk(id) ;
    if(role){
        role.setRestaurants(req.body).then(result => {
            return res.status(200).json(
                result
            );
        }).catch(err => {
            return res.status(500).json({
                message: err
            });
        })
    } else {
        return res.status(404).json({
            message: "not found !"
        });
    }
}
