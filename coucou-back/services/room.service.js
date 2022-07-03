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
