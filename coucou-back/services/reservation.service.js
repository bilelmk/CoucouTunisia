const Reservation = require('../models/reservation.model')
const Restaurant = require('../models/restaurant.model')
const Client = require('../models/client.model')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
        if(savedReservation) return res.status(200).json(savedReservation);
        else return res.status(500).json({message : "error adding reservation"});
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
        if(reservations) return res.status(200).json(reservations);
        else return res.status(404).json({message: "no records"});
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
        if(reservations) return res.status(200).json(reservations);
        else return res.status(404).json({message: "no records"});
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.updateState = async (req, res, next) => {
    try {
        const result = await Reservation.update({ state: req.body.state}, {where: { id: req.body.id }});
        if(result[0] === 1) return res.status(200).json({message: "success"});
        else return res.status(404).json({message: "not found"});
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.updateCanceled = async (req, res, next) => {
    try {
        const result = await Reservation.update({ canceled: req.body.canceled}, {where: { id: req.body.id }});
        if(result[0] === 1) return res.status(200).json({message: "success"});
        else return res.status(404).json({message: "not found"});
    }
    catch (err) {
        return res.status(500).json(err);
    }
}

exports.getOne = (req, res, next , id) => {
    Reservation.findByPk(id , {
        include: [
            { model: Restaurant, as: 'restaurant' },
            { model: Client, as: 'client' },
        ],
    }).then(reservation => {
        return res.status(200).json(reservation);
    }).catch(err => {
        return res.status(500).json(err);
    });
};

exports.update = async (req, res, next, id) => {
    try {
        const reservation = await Reservation.update({
                restaurantId: req.body.restaurantId,
                note: req.body.note,
                date: req.body.date,
                time: req.body.time,
                adultNumber: req.body.adultNumber,
                childrenNumber: req.body.childrenNumber,
                babeNumber: req.body.babeNumber,
                room: req.body.room,
                carNumber: req.body.carNumber,
                price: req.body.price,
                finalPrice: req.body.finalPrice,
                state: req.body.state,
                canceled: req.body.canceled,
            },
            { where: {id: req.body.id}
            })
        if(reservation[0] === 1) return res.status(200).json(reservation);
        else return res.status(404).json({message: "not found"});
    }
    catch (error) {
        return res.status(500).json(error);
    }
}

// used for cron
exports.getTodayReservations = async () => {
    try {
        const date = new Date();date.setHours(0, 0, 0, 0);
        const reservations = await Reservation.findAll({
            where: {date: {[Op.eq]: date}},
            include: [
                {model: Restaurant, as: 'restaurant'},
                {model: Client, as: 'client'},
            ],
        })
        if (reservations) return reservations;
        else return null ;
    } catch (e) {
        return null;
    }
}
