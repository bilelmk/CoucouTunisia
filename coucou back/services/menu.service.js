const Menu = require("../models/menu.model");

exports.delete = ( req, res , next , id) => {
    Menu.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({ message: err });
    })
}

exports.update = async (req, res , next , id) => {
    // Menu.update({ name: req.body.name , description: req.body.description},
    //     { where: { id: id }})
    // .then(result => {
    //     if(result[0]) return res.status(200).json(result);
    //     else return res.status(404).json({message: "not found"});
    // }).catch(err => {
    //     return res.status(404).json({message: err});
    // })
}
