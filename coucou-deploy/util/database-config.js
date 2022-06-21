const Sequelize = require('sequelize') ;
require('dotenv').config();


const sequelize = new Sequelize('cocotukdb' , 'cocotukdb' , 'Z6M62K8Hx3iyw' , {
    dialect : 'mysql',
    host : 'localhost'})

module.exports = sequelize
