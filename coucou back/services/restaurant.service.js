const Restaurant = require('../models/restaurant.model')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.add = async (req, res, next) => {
  req.body.restaurant = JSON.parse(req.body.restaurant)

  const restaurant = await Restaurant.findOne({ where: { phone: req.body.restaurant.phone.toString() } })
  if (restaurant) res.status(400).json({ message: 'phone exist!' })

  req.body.restaurant.image = req.files.image[0].filename

  req.body.restaurant.menus = req.body.restaurant.menus ? req.body.restaurant.menus.map((element, index) => {
    return { ...element, image: req.files.menuImages[index].filename }
  }) : []

  req.body.restaurant.rooms = req.body.restaurant.rooms ? req.body.restaurant.rooms.map((element, index) => {
    return { ...element, image: req.files.roomImages[index].filename }
  }) : []
  req.body.restaurant.images = req.body.restaurant.images.map((element, index) => {
    return { ...element, image: req.files.restaurantImages[index].filename }
  })
  Restaurant.create(req.body.restaurant, { include: ['rooms', 'planning', 'menus', 'images'] })
    .then((restaurent) => {
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
exports.getAll = (req, res, next) => {
  let key =req.body.key? "%" + req.body.key + "%":'%%'
  page = req.query.page ? parseInt(req.query.page) : 1

  perpage = req.query.perPage ? parseInt(req.query.perPage) : 10

  const offset = (page * perpage) - perpage

  Restaurant.findAll({
    limit: perpage,
    offset: offset,
    where: {
      [Op.or]: [
        { name: { [Op.like]: key } },
        { description: { [Op.like]: key } },
        { email: { [Op.like]: key } },
      ]
    }
  }).then(
    restaurants => {
      res.status(200).json({
        restaurant: restaurants
      })

    },
  ).catch(err => {
    res.status(400).json({
      message: 'error'
    })
  })
}
exports.getRestaurantById = (req, res, next) => {
  Restaurant.findOne({
    where: {
      id: req.params.id
    },
    include: ['rooms', 'planning', 'menus']
  }).then(restaurant => res.status(200).json({
    restaurant: restaurant
  })).catch(err => res.status(400).json({
    message: 'bad request'
  }))
}
exports.updateRestaurant = (req, res, next) => {
  Restaurant.update(req.body, { where: { id: req.params.id } }).then((restaurant) => {
    res.status(200).json({
      restaurant: restaurant
    })
  }).catch(err => {
    res.status(400).json({
      message: 'bad request'
    })
  })
}