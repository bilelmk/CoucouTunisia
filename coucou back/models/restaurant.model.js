const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');
const Planning = require("./planning.model");
const Image = require("./image.model");
const Room = require('./room.model');
const Category = require('./category.model');
const Menu = require('./menu.model');
// const Room = require("./room.model");

const Restaurant = sequelize.define('restaurant', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    webSite: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    responsable: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // logitude : {
    //     type : Sequelize.FLOAT ,
    // },
    // latitude : {
    //     type : Sequelize.FLOAT ,
    // }
});

// Restaurant.hasMany(Image , { as: "images" });
// Image.belongsTo(Restaurant)

Restaurant.hasMany(Room, { as: "rooms" })

Restaurant.hasOne(Planning, { as: "planning" });

// Planning.belongsTo(Restaurant);

Restaurant.hasMany(Menu, { as: "menus" })
// Menu.belongsTo(Restaurant);

module.exports = Restaurant;
