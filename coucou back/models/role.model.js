const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Permission = require('./permission.model')
const Restaurant = require('./restaurant.model')

const Role = sequelize.define('role' , {
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

Role.belongsToMany(Permission, { through: 'role_permissions' ,  uniqueKey: 'id'});
Role.belongsToMany(Restaurant, { through: 'role_restaurants' ,  uniqueKey: 'id'});

module.exports = Role ;
