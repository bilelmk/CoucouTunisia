const Sequelize = require('sequelize') ;
require('dotenv').config({path: '.env.' + process.env.NODE_ENV });

const sequelize = new Sequelize(process.env.DATABASE_NAME , process.env.DATABASE_USERNAME , process.env.DATABASE_PASSWORD , {
    dialect : 'mysql',
    host : process.env.DATABASE_HOST}
)

module.exports = sequelize
