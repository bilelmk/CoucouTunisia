const Coupon = require("../models/coupon.model");
const codesGenerator = require('voucher-code-generator');
const moment = require('moment');

exports.getAll = ( req, res , next ) => {
    Coupon.findAll({include: ["restaurant"]}).then(result =>{
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(404).json(err);
    })
}

exports.generate = async ( req, res , next ) => {
    let coupons = []
    let codes = await codesGenerator.generate({
        length: 6,
        count: req.body.number ,
    });
    for(let i=0; i< req.body.number ; i++){
        let coupon = {
            code: codes[i],
            reduction: req.body.reduction ,
            expirationDate: req.body.expirationDate,
            general: req.body.general,
            restaurantId: req.body.restaurantId,
        }
        coupons.push(coupon)
    }
    Coupon.bulkCreate(coupons).then(result => {
        return res.status(200).json(result);
    }).catch(err => {
        return res.status(500).json(err);
    })
}

exports.deleteExpiredCoupon = () => {
    const date = moment().format(("DD-MM-YYYY"));
    Coupon.destroy({ where: { expirationDate: date }}).then(result => {
        if(result) console.log(result);
        else console.log("no record");
    }).catch(err => {
        console.log(err);
    })
}

// exports.update = async (req, res , next , id) => {
//     Permission.update({ name: req.body.name , description: req.body.description}, { where: { id: id }
//     }).then(result => {
//         if(result[0]) return res.status(200).json(result);
//         else return res.status(404).json({message: "not found"});
//     }).catch(err => {
//         return res.status(404).json({ message: "server error" });
//     })
// }

