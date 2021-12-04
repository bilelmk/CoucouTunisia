const Sequelize = require('sequelize') ;

const sequelize = new Sequelize('coucou-app' , 'postgres' , 'admin' , {
    dialect : 'postgres',
    host : 'localhost'
}) ;

module.exports = sequelize
