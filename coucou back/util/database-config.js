const Sequelize = require('sequelize') ;

const sequelize = new Sequelize('coucou-app' , 'root' , '' , {
    dialect : 'mysql',
    host : 'localhost'
}) ;

module.exports = sequelize
