const Menu = require("../models/menu.model");

exports.delete = ( req, res , next , id) => {
    Menu.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(404).json({ message: err });
    })
}

exports.add = async (req, res , next , id) => {
    req.body.menu.image = req.files.image[0].filename
    Menu.create(req.body.menu).then(
        (menu) => {
            res.status(201).json(menu)
        })
        .catch(err => {
            return res.status(400).json({ message: 'error' })
    })
}
