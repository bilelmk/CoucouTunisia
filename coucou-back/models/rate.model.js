const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Client = require("./client.model");
const Restaurant = require("./restaurant.model");

const Rate = sequelize.define('rate' , {
    id : {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    rate : {
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    comment : {
        type : Sequelize.STRING ,
        allowNull : false ,
    }
});

Restaurant.hasOne(Rate) ;
Rate.belongsTo(Restaurant) ;

Client.hasOne(Rate);
Rate.belongsTo(Client) ;

module.exports = Rate ;
