const ExternalClient = require("../models/external-client.model");

exports.getAll = ( req, res , next ) => {
    ExternalClient.findAll().then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json(err);
    })
}

exports.addBulk = async ( req, res , next ) => {
    ExternalClient.bulkCreate(req.body).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(500).json(err);
    })
}

