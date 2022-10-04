const Restaurant = require('../models/restaurant.model')


exports.add = async (req, res, next) => {
  try {
    const restaurant = {
      ...JSON.parse(req.body.restaurant),
      active: true
    }
    const existRestaurant = await Restaurant.findOne({ where: { phone: restaurant.phone.toString() } })
    if (existRestaurant) res.status(405).json({ message: 'phone exist!' })
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
    const addedRestaurant = await Restaurant.create(restaurant, { include: ['rooms', 'planning', 'menus', 'images'] }) ;
    return res.status(200).json(addedRestaurant);

  } catch(error) {
    return res.status(500).json(error)
  }
}

// exports.getAll = (req, res, next) => {
//   let key = req.body.key? "%" + req.body.key + "%":'%%'
//   page = req.query.page ? parseInt(req.query.page) : 1
//   perpage = req.query.perPage ? parseInt(req.query.perPage) : 10
//   const offset = (page * perpage) - perpage
//   Restaurant.findAll({
//     limit: perpage,
//     offset: offset,
//     where: {
//       [Op.or]: [
//         { name: { [Op.like]: key } },
//         { description: { [Op.like]: key } },
//         { email: { [Op.like]: key } },
//       ]
//     }
//   }).then(
//     restaurants => {
//       return  res.status(200).json({
//         restaurant: restaurants
//       })
//
//     },
//   ).catch(err => {
//     return res.status(400).json({
//       message: 'error'
//     })
//   })
// }

exports.getAllLite = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    return res.status(200).json(restaurants);
  } catch(err) {
    return res.status(500).json(err);
  }
}

exports.getAllActive = async ( req, res , next ) => {
  try {
    const restaurants = await Restaurant.findAll( { where: { active : true} ,include: ['rooms']}) ;
    return res.status(200).json(restaurants);
  } catch(err) {
    return res.status(500).json(err);
  }
}

exports.getOne = async ( req, res , next, id ) => {
  try {
    let restaurant = await Restaurant.findByPk(id , {include: ['rooms', 'planning', 'menus' , 'images']} )
    if(restaurant) {
      return res.status(200).json(restaurant);
    }
    else {
      return res.status(404).json({message: "not found"});
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.update = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.update({
          name: req.body.name,
          description: req.body.description,
          email: req.body.email,
          phone: req.body.phone,
          webSite: req.body.webSite,
          responsable: req.body.responsable,
          smsMessage: req.body.smsMessage,
        },
        { where: {id: req.body.id}
        })
    if(restaurant[0] === 1) return res.status(200).json(restaurant);
    else return res.status(404).json({message: "not found"});
  }
  catch (error) {
    return res.status(500).json(error);
  }
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

exports.changeImage = async ( req, res , next , id ) => {
  try {
    const image = req.files.image[0].filename;
    const restaurant = await Restaurant.update({image: image}, {where: {id: id}});
    if (restaurant[0] === 1) return res.status(200).json({image: image});
    return res.status(404).json({message: "not found"});
  } catch (error) {
    return res.status(500).json(error);
  }
}
