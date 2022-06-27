const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Menu = sequelize.define('menu' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    name: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    description: {
        type : Sequelize.TEXT ,
        allowNull : true ,
    },
    image:{
        type : Sequelize.STRING ,
        allowNull : false ,
    }
});

module.exports = Menu ;
