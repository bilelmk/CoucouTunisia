const ExternalClient = require("../models/external-client.model");

exports.getAll = async ( req, res , next ) => {
    try {
        const externalClients = await ExternalClient.findAll() ;
        if(externalClients) return res.status(200).json(externalClients);
        else return res.status(404).json({message: "no records"});
    }
    catch(err) {
        return res.status(500).json(err);
    }
}

exports.addBulk = async ( req, res , next ) => {
    let deplucation = 0 ;
    let addedClient = [] ;
    try {
        for(let client of req.body) {
            const externalClient = await ExternalClient.findAll({where : {phone: client.phone}})
            if(externalClient && externalClient.length > 0) {
                deplucation ++ ;
            }
            else {
                const addedClient = await ExternalClient.create(client) ;
                addedClient.push(addedClient) ;
            }
        }
         return res.status(200).json({deplucation , addedClient});
    }
    catch(err) {
        return res.status(500).json(err);
    }
}

