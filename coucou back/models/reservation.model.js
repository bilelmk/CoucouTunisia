const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Reservation = sequelize.define('reservation' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    note: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    date: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    time: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    checked: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    confirmed: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    arrived: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    finished: {
        type : Sequelize.BOOLEAN ,
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
    }
});

module.exports = Reservation ;
