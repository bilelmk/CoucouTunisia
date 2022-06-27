const Permission = require("../models/permission.model");

exports.getAll = ( req, res , next ) => {
    Permission.findAll().then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json(err);
    })
}

exports.add = ( req, res , next ) => {
    Permission.create(req.body).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(500).json(err);
    })
}

exports.delete = ( req, res , next , id) => {
    Permission.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json(err);
    })
}

exports.update = async (req, res , next ) => {
     Permission.update({ name: req.body.name , description: req.body.description}, { where: { id: req.body.id }
    }).then(result => {
         if(result[0]) return res.status(200).json(result);
         else return res.status(404).json({message: "not found"});
    }).catch(err => {
         return res.status(404).json(err);
    })
}

