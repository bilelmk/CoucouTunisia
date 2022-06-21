const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Restaurant = require('./restaurant.model') ;
const Room = require('./room.model') ;
const Client = require('./client.model') ;

const Reservation = sequelize.define('reservation' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    note: {
        type : Sequelize.STRING ,
        allowNull : true ,
    },
    date: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    time: {
        type : Sequelize.STRING ,
        allowNull : false ,
        allowNull : true
    },
    checked: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
        default : false
    },
    confirmed: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
        default : false
    },
    arrived: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
        default : false
    },
    finished: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
        default : false
    },
    adultNumber: {
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    childrenNumber: {
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    babeNumber: {
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    carNumber:{
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    price: {
        type : Sequelize.FLOAT ,
        allowNull : true ,
    }
});

Restaurant.hasOne(Reservation);
Reservation.belongsTo(Restaurant);

Room.hasOne(Reservation);
Reservation.belongsTo(Room);

Client.hasOne(Reservation);
Reservation.belongsTo(Client);

module.exports = Reservation ;
