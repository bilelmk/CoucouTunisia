const Room = require("../models/room.model");
const Restaurant = require("../models/restaurant.model");

exports.delete = ( req, res , next , id) => {
    Room.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({ message: err });
    })
}

exports.add = async (req, res , next , id) => {
    req.body.room.image = req.files.image[0].filename
    Room.create(req.body.room).then(
        (room) => {
            res.status(201).json(room)
        })
        .catch(err => {
            return res.status(400).json({ message: 'error' })
    })
}
