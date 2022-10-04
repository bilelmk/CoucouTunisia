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

exports.update = async (req, res, next) => {
    try {
        const menu = await Menu.update({
                name: req.body.name,
                description: req.body.description,
            },
            { where: {id: req.body.id}})
        if(menu[0] === 1) return res.status(200).json(menu);
        else return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

exports.changeImage = async ( req, res , next , id ) => {
    try {
        const image = req.files.image[0].filename ;
        const menu = await Menu.update({ image: image }, {where: { id: id }}) ;
        if(menu[0] === 1) return res.status(200).json({image: image});
        return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
    //
    // .then(result => {
    //     if(result[0] === 1){
    //         return res.status(200).json({
    //             image: image
    //         });
    //     }
    //     return res.status(404).json({
    //         message: "not found"
    //     });
    // }).catch(err => {
    //     return res.status(500).json({
    //         message: "server error"
    //     });
    // })
}
