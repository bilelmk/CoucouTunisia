const Room = require("../models/room.model");

exports.delete = ( req, res , next , id) => {
    Room.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json(err);
    })
}

exports.add = async (req, res , next) => {
    const toAddRoom = JSON.parse(req.body.room)
    toAddRoom.image = req.files.image[0].filename
    Room.create(toAddRoom).then((room) => {
        res.status(201).json(room)
    }).catch(err => {
        return res.status(500).json(err)
    })
}

exports.update = async (req, res, next) => {
    try {
        const room = await Room.update({
                name: req.body.name,
                description: req.body.description,
                minPlace: req.body.minPlace,
                maxPlace: req.body.maxPlace,
                packPrice: req.body.packPrice,
                packChildrenPrice: req.body.packChildrenPrice,
            },
            { where: {id: req.body.id}})
        if(room[0] === 1) return res.status(200).json(room);
        else return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

exports.changeImage = async ( req, res , next , id ) => {
    try {
        const image = req.files.image[0].filename ;
        const room = await Room.update({ image: image }, {where: { id: id }}) ;
        if(room[0] === 1) return res.status(200).json({image: image});
        return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

