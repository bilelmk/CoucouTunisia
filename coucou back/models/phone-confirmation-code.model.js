const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');
const Client = require("./client.model");

const PhoneConfirmationCode = sequelize.define('phoneConfirmationCode', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING ,
        allowNull: false
    }
});

PhoneConfirmationCode.belongsTo(Client)

module.exports = PhoneConfirmationCode;
