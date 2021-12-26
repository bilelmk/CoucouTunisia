const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Permission = sequelize.define('permission' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    name: {
        type : Sequelize.STRING ,
        allowNull : false ,
        unique: true
    },
    description: {
        type : Sequelize.STRING ,
        allowNull : false ,
    }
});

module.exports = Permission ;
