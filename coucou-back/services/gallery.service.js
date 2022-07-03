const Image = require("../models/image.model");

exports.delete = ( req, res , next , id) => {
    Image.destroy({ where: { id: id }}).then(result => {
        if(result) return res.status(200).json(result);
        else return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json(err);
    })
}

exports.add = async (req, res , next) => {
    const toAddImage = JSON.parse(req.body.gallery)
    toAddImage.image = req.files.image[0].filename
    Image.create(toAddImage).then((image) => {
        res.status(201).json(image)
    }).catch(err => {
        return res.status(500).json(err)
    })
}
