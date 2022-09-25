const Sequelize = require('sequelize') ;
require('dotenv').config();

const sequelize = new Sequelize('preprod-coco-app' , 'root' , 'Coco2022' , {
    dialect : 'mysql',
    host : '51.77.140.170'}
)

module.exports = sequelize
