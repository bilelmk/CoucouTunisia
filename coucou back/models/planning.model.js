const Sequelize = require('sequelize') ;
const sequelize = require('../util/database-config') ;

const Planning = sequelize.define('planning' , {
    id : {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
    },
    monday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    mondayOpen : {
        type : Sequelize.STRING ,
    },
    mondayClose : {
        type : Sequelize.STRING ,
    },
    tuesday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    tuesdayOpen : {
        type : Sequelize.STRING ,
    },
    tuesdayClose : {
        type : Sequelize.STRING ,
    },
    wednesday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    wednesdayOpen : {
        type : Sequelize.STRING ,
    },
    wednesdayClose : {
        type : Sequelize.STRING ,
    },
    thursday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    thursdayOpen : {
        type : Sequelize.STRING ,
    },
    thursdayClose : {
        type : Sequelize.STRING ,
    },
    friday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    fridayOpen : {
        type : Sequelize.STRING ,
    },
    fridayClose : {
        type : Sequelize.STRING ,
    },
    saturday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    saturdayOpen : {
        type : Sequelize.STRING ,
    },
    saturdayClose : {
        type : Sequelize.STRING ,
    },
    sunday : {
        type : Sequelize.BOOLEAN ,
        allowNull : false ,
    },
    sundayOpen : {
        type : Sequelize.STRING ,
    },
    sundayClose : {
        type : Sequelize.STRING ,
    }
});

module.exports = Planning ;
