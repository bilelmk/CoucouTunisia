const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');

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

module.exports = ResetPasswordCode;
