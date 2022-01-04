const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Restaurant = require('./restaurant.model') ;

const Coupon = sequelize.define('coupon' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    code: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    reduction: {
        type : Sequelize.FLOAT ,
        allowNull : false ,
    },
    expirationDate: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    general: {
        type : Sequelize.STRING ,
        allowNull : false ,
    }
});

Restaurant.hasOne(Coupon);
Coupon.belongsTo(Restaurant);

module.exports = Coupon ;
