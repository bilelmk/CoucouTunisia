const Reservation = require('../models/reservation.model')
const Restaurant = require('../models/restaurant.model')
const Client = require('../models/client.model')
const Sequelize = require("sequelize");

exports.add = async (req, res, next) => {
    try {
        const reservation = {
            ...req.body ,
            clientId: req.userData.userId ,
            checked: false ,
            arrived: false ,
            confirmed: false ,
            finished: false ,
            state: 'checking' ,
            canceled: false ,
        }
        const savedReservation = await Reservation.create(reservation) ;
        if(savedReservation) {
            return res.status(200).json(savedReservation);
        }
        else {
            return res.status(500).json({message : "error adding reservation"});
        }
    }
    catch(err)  {
        return res.status(500).json(err);
    }
}

exports.getByClient = async (req, res, next) => {
    try {
        const reservations = await Reservation.findAndCountAll({
            distinct: true,
            limit: req.body.limit ,
            offset: req.body.offset ,
            where: {clientId: req.userData.userId , canceled: false},
            order: [['date', 'DESC']],
            include: [
                {model: Restaurant, as: 'restaurant'},
            ],
        });
        if(reservations) {
            return res.status(200).json(reservations);
        }
        else {
            return res.status(404).json({message: "no records"});
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const reservations = await Reservation.findAndCountAll({
            distinct: true,
            limit: req.body.limit ,
            offset: req.body.offset ,
            // where: {clientId: req.userData.userId},
            order: [['date', 'DESC']],
            include: [
                { model: Restaurant, as: 'restaurant' },
                { model: Client, as: 'client' },
            ],
        });
        if(reservations) {
            return res.status(200).json(reservations);
        }
        else {
            return res.status(404).json({message: "no records"});
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
