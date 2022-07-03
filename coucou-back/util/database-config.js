const Sequelize = require('sequelize') ;
require('dotenv').config();


const sequelize = new Sequelize('coucou-app' , 'root' , '' , {
    dialect : 'mysql',
    host : 'localhost'}
)

// prod
// const sequelize = new Sequelize('cocotukdb' , 'cocotukdb' , 'Z6M62K8Hx3iyw' , {
//     dialect : 'mysql',
//     host : 'localhost'}
// )

// const sequelize = new Sequelize(process.env.DATABASE_URL , {
//     dialect : 'postgres',
//     host : 'localhost',
//     "dialectOptions": {
//         "ssl": {
//           "require": true,
//           "rejectUnauthorized": false
//         }
//     }
// });

module.exports = sequelize
