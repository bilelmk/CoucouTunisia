const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Permission = require('./permission.model')

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
// Permission.belongsToMany(Role, { through: 'role_permissions' , uniqueKey: 'id'});

// Permission.belongsToMany(Role, { through: 'role_permissions' });

module.exports = Role ;
