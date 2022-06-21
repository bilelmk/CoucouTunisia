const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');
const Client = require('./client.model');

const ResetPasswordCode = sequelize.define('resetPasswordCode', {
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

ResetPasswordCode.belongsTo(Client)

module.exports = ResetPasswordCode;
