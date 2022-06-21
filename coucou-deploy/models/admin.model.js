const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Role = require('./role.model') ;

const Admin = sequelize.define('admin' , {
    id: {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    firstname: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    lastname: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    username: {
        type : Sequelize.STRING ,
        allowNull : false ,
        unique : true
    },
    password: {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
    active: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
});

Role.hasOne(Admin);
Admin.belongsTo(Role);

module.exports = Admin ;
