const Sequelize = require('sequelize') ;
require('dotenv').config();


const sequelize = new Sequelize('coucou-app' , 'root' , '' , {
    dialect : 'mysql',
    host : 'localhost'})
// const sequelize = new Sequelize(process.env.DATABASE_URL , {
//     dialect : 'postgres',
//     host : 'localhost',
//     // "dialectOptions": {
//     //     "ssl": {
//     //       "require": true,
//     //       "rejectUnauthorized": false
//     //     }
//     // }
// });

module.exports = sequelize
