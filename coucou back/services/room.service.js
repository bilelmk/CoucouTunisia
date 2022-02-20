const Room = require("../models/room.model");

exports.delete = ( req, res , next , id) => {
    Room.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({ message: err });
    })
}
