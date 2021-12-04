const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;
const Restaurant = require('./restaurant.model') ;

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
    role: {
        type : Sequelize.ENUM('ADMIN', 'SUPER') ,
        allowNull : false ,
    },
    active: {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
});

//Admin.hasOne(Restaurant ,{ as : "restaurant" });
//Restaurant.belongsTo(Admin);

module.exports = Admin ;
