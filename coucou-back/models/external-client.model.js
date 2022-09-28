const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const ExternalClient = sequelize.define('externalClient' , {
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
    phone: {
        type : Sequelize.STRING ,
        allowNull : false ,
        unique: true
    }
});

module.exports = ExternalClient ;
