const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Menu = sequelize.define('menu' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    description: {
        type : Sequelize.STRING ,
        allowNull : true ,
    },
    image:{
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    category:{
        type:Sequelize.ENUM('LUNCH','BREACKFAST'),
        allowNull:true
    }
});

module.exports = Menu ;
