const Restaurant = require('../models/restaurant.model')
const Sequelize = require('sequelize');
const Client = require("../models/client.model");
const Op = Sequelize.Op;

exports.add = async (req, res, next) => {
  const restaurant = {
    ...JSON.parse(req.body.restaurant),
    active: true
  }
  const existRestaurant = await Restaurant.findOne({ where: { phone: req.body.restaurant.phone.toString() } })
  if (existRestaurant) res.status(400).json({ message: 'phone exist!' })

  restaurant.image = req.files.image[0].filename

  restaurant.menus =  restaurant.menus ? restaurant.menus.map((element, index) => {
    return { ...element, image: req.files.menuImages[index].filename }
  }) : []

  restaurant.rooms = restaurant.rooms ? restaurant.rooms.map((element, index) => {
    return { ...element, image: req.files.roomImages[index].filename }
  }) : []

  restaurant.images = restaurant.images.map((element, index) => {
    return { ...element, image: req.files.restaurantImages[index].filename }
  })

  Restaurant.create(restaurant, { include: ['rooms', 'planning', 'menus', 'images'] })
    .then((restaurent) => {
      return res.status(201).json(restaurent)
    }).catch(error => {
      return res.status(400).json(error)
    })
}

exports.getAll = (req, res, next) => {
  let key = req.body.key? "%" + req.body.key + "%":'%%'
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
      return  res.status(200).json({
        restaurant: restaurants
      })

    },
  ).catch(err => {
    return res.status(400).json({
      message: 'error'
    })
  })
}

exports.getAllLite = ( req, res , next ) => {
  Restaurant.findAll( { include: ['rooms']}).then(result =>{
    return res.status(200).json(result);
  }).catch(err => {
    return res.status(404).json({message: "no records"});
  })
}

exports.getOne = async ( req, res , next, id ) => {
    let restaurant = await Restaurant.findByPk(id , {include: ['rooms', 'planning', 'menus' , 'images']} )
    if(restaurant) {
        return res.status(200).json(restaurant);
    }
   else {
        return res.status(404).json({message: "not found"});
    }
}

exports.updateRestaurant = (req, res, next) => {
  Restaurant.update(req.body, { where: { id: req.params.id } }).then((restaurant) => {
    return res.status(200).json({
      restaurant: restaurant
    })
  }).catch(err => {
    return res.status(400).json({
      message: 'bad request'
    })
  })
}


exports.block = ( req, res , next , id ) => {
  Restaurant.update({ active: false }, {where: { id: id }}).then(result => {
    if(result[0] === 1){
      return res.status(200).json({
        message: "success"
      });
    }
    return res.status(404).json({
      message: "not found"
    });
  }).catch(err => {
    return res.status(500).json({
      message: "server error"
    });
  })
}

exports.deblock = ( req, res , next , id ) => {
  Restaurant.update({ active: true }, {where: { id: id }}).then(result => {
    if(result[0] === 1){
      return res.status(200).json({
        message: "success"
      });
    }
    return res.status(404).json({
      message: "not found"
    });
  }).catch(err => {
    return res.status(500).json({
      message: "server error"
    });
  })
}

