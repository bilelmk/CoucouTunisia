const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');

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

module.exports = PhoneConfirmationCode;
