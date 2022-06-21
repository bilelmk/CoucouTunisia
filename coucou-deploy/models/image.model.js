const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Image = sequelize.define('image' , {
    id : {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    image : {
        type : Sequelize.STRING ,
        allowNull : false ,
    },
});

module.exports = Image ;
