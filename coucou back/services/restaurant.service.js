const Restaurant = require('../models/restaurant.model')

exports.add = async (req, res, next) => {
    req.body.restaurant=JSON.parse(req.body.restaurant)
    console.log(req.files)
   const restaurant = await Restaurant.findOne({ where: { phone: req.body.restaurant.phone } })
   if (restaurant) res.status(400).json({ message: 'phone exist!' })
   req.body.restaurant.image = req.files.image[0].filename

   req.body.restaurant.menus =  req.body.restaurant.menus.map((element, index) => {
    return { ...element, image: req.files.menuImages[index].filename }
   })
   req.body.restaurant.rooms =  req.body.restaurant.rooms.map((element, index) => {
     return { ...element, image: req.files.roomImages[index].filename }
   })
  Restaurant.create(req.body.restaurant, { include: ['rooms', 'planning', 'menus'] })
    .then((restaurent) => {
      res.status(201).json({
        message: 'done!'
      })
    }).catch(err => {
      console.log('error', err)
      res.status(400).json({
        message: 'error',
        error: err
      })
    })
}
exports.getAll= (req,res,next)=>{
  Restaurant.findAll().then(
    restaurants => {
        res.status(200).json({
          restaurant:restaurants
        })
       
    },
    err => next(err)
).catch(
    res.status(400).json({
      message:'error'
    })
)
}
