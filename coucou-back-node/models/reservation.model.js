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
    },
    date: {
        type : Sequelize.DATE ,
        allowNull : false ,
    },
    time: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    room: {
        type : Sequelize.STRING ,
        allowNull : false ,
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
    carNumber: {
        type : Sequelize.INTEGER ,
        allowNull : false ,
    },
    price: {
        type : Sequelize.FLOAT ,
        allowNull : false ,
    },
    finalPrice: {
        type : Sequelize.FLOAT ,
        allowNull : false ,
    },
    state: {
        type : Sequelize.ENUM('checking' , 'checked', 'confirmed', 'arrived', 'finished') ,
        allowNull : false ,
    },
    // confirmed: {
    //     type : Sequelize.BOOLEAN ,
    //     allowNull : false ,
    // },
    // arrived: {
    //     type : Sequelize.BOOLEAN ,
    //     allowNull : false ,
    // },
    // finished: {
    //     type : Sequelize.BOOLEAN ,
    //     allowNull : false ,
    // },
    canceled: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    }
});

Restaurant.hasOne(Reservation) ;
Reservation.belongsTo(Restaurant) ;

Client.hasOne(Reservation);
Reservation.belongsTo(Client) ;

module.exports = Reservation ;
