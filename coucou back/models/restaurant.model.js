const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Planning = require("./planning.model");
const Image = require("./image.model");
// const Room = require("./room.model");

const Restaurant = sequelize.define('restaurant' , {
    id : {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    description : {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    phone : {
        type : Sequelize.STRING ,
        allowNull : false ,
        unique : true
    },
    image : {
        type : Sequelize.STRING ,
        unique : true
    },
    // logitude : {
    //     type : Sequelize.BOOLEAN ,
    // },
    // latitude : {
    //     type : Sequelize.BOOLEAN ,
    // }
});

Restaurant.hasMany(Image , { as: "images" });
// Image.belongsTo(Restaurant) ;

Restaurant.hasOne(Planning ,{ as : "planning" })
// Planning.belongsTo(Restaurant);

// Restaurant.hasOne(Menu ,{ as : "menu" })
// Menu.belongsTo(Restaurant);

module.exports = Restaurant ;
