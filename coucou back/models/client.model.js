const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const PhoneConfirmationCode = require("../models/phone-confirmation-code.model");

const Client = sequelize.define('client' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    firstName: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    lastName: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    password: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    phone: {
        type : Sequelize.STRING ,
        allowNull : false ,
        unique : true
    },
    image: {
        type : Sequelize.STRING ,
        unique : true
    },
    verified: {
        type : Sequelize.BOOLEAN ,
    },
    active: {
        type : Sequelize.BOOLEAN ,
    },
    signupSource: {
        type : Sequelize.STRING ,
    }
});

Client.belongsTo(PhoneConfirmationCode );


module.exports = Client ;
