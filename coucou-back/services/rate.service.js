const Rate = require("../models/rate.model");
const Restaurant = require("../models/restaurant.model");
const Client = require("../models/client.model");

// todo avg
exports.add = async (req, res, next) => {
    try {
        const rate = await Rate.create(req.body) ;
        if(!rate) return res.status(500).json({message: "rate not created"});
        else return res.status(200).json(rate);
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

// todo avg
exports.delete = async (req, res, next , id) => {
    try {
        const rate = await Rate.destroy({ where: { id: id }}) ;
        if(!rate) return res.status(404).json({message: "not found"});
        else return res.status(200).json(rate);
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

// todo avg
exports.update = async (req, res, next) => {
    try {
        const rate = await Rate.update({
                rate: req.body.rate,
                comment: req.body.comment,
            },
            { where: {id: req.body.id}})
        if(rate[0] === 1) return res.status(200).json(rate);
        else return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

exports.getByRestaurantAndClient = async (req, res, next , restaurantId) => {
    try {
        const rates = await Rate.findAll({
            include: [
                { model: Client, as: 'client', where: { id: req.userData.userId }  },
                { model: Restaurant, as: 'restaurant' , where: { id: restaurantId } },
            ],
        }) ;
        if(!rate) return res.status(404).json({message: "not found"});
        else return res.status(200).json(rates);
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

exports.getAllByRestaurant = async (req, res, next, restaurantId) => {
    try {
        const rates = await Rate.findAll({
            include: [
                { model: Client, as: 'client' },
                { model: Restaurant, as: 'restaurant' , where: { id: restaurantId } },
            ],
        }) ;
        if(!rate) return res.status(404).json({message: "not found"});
        else return res.status(200).json(rates);
    }
    catch (err) {
        return res.status(500).json(err)
    }
}
