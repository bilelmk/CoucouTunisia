const Restaurant = require('../models/restaurant.model')

exports.add = async(req, res, next) => {
    console.log(req.body)
    const restaurant=await Restaurant.findOne({ where: { phone: req.body.phone } })
    if(restaurant) res.status(400).json({message:'phone exist!'})
    req.body.planning = req.body.planning ? JSON.parse(req.body.planning) : null
  req.body.image = req.files.image[0].filename
  req.body.menus = (req.body.menus && req.body.menus.length) ? req.body.menus.map((element, index) => {
      const jsonElement=JSON.parse(element)
      return { ...jsonElement, image: req.files.menuImages[index].filename }
  }) : []
  req.body.rooms = (req.body.rooms && req.body.rooms.length) ? req.body.rooms.map((element, index) => {
      console.log(typeof element)
      const jsonElement=JSON.parse(element.toString())
      console.log("jsonooooo",jsonElement)
      return { ...jsonElement, image: req.files.roomImages[index].filename }
  }) : []
   Restaurant.create(req.body, { include: ['rooms', 'planning', 'menus'] })
       .then((restaurent)=>{
     res.status(201).json({
        message:'done!'
     })
   }).catch(err=>{
       console.log('error',err)
       res.status(400).json({
        message:'error',
        error:err
     })
   })
}
