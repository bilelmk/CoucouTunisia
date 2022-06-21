const Reservation = require('../models/reservation.model')

exports.add = async (req, res, next) => {
    // req.body.restaurant = JSON.parse(req.body.restaurant)
    // const restaurant = await Restaurant.findOne({ where: { phone: req.body.restaurant.phone } })
    // if (restaurant) res.status(400).json({ message: 'phone exist!' })
    // req.body.restaurant.image = req.files.image[0].filename
    //
    // req.body.restaurant.menus =  req.body.restaurant.menus.map((element, index) => {
    //     return { ...element, image: req.files.menuImages[index].filename }
    // })
    // req.body.restaurant.rooms =  req.body.restaurant.rooms.map((element, index) => {
    //     return { ...element, image: req.files.roomImages[index].filename }
    // })
    // Restaurant.create(req.body.restaurant, { include: ['rooms', 'planning', 'menus'] })
    //     .then((restaurent) => {
    //         res.status(201).json({
    //             message: 'done!'
    //         })
    //     }).catch(err => {
    //     res.status(400).json({
    //         message: 'error',
    //         error: err
    //     })
    // })
    console.log(req.body)
    Reservation.create(req.body.reservation)
    .then((reservation) => {
      res.status(201).json({
        message: 'done!'
      })
    }).catch(err => {
      res.status(400).json({
        message: 'error',
        error: err
      })
    })
}


exports.getAll = async (req, res, next) => {
    Reservation.findAll().then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json({message: "no records"});
    })
}
