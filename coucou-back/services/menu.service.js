const Menu = require("../models/menu.model");

exports.delete = ( req, res , next , id) => {
    Menu.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json(err);
    })
}

exports.add = async (req, res , next ) => {
    const toAddMenu = JSON.parse(req.body.menu)
    toAddMenu.image = req.files.image[0].filename
    Menu.create(toAddMenu).then((menu) => {
        res.status(201).json(menu)
    }).catch(err => {
        return res.status(500).json(err)
    })
}
