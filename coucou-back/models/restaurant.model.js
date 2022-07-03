const Sequelize = require('sequelize');
const sequelize = require('../util/database-config');
const Planning = require("./planning.model");
const Image = require("./image.model");
const Room = require('./room.model');
const Menu = require('./menu.model');

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
    smsMessage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    parking: {
        type: Sequelize.STRING,
    },
    longitude : {
        type : Sequelize.FLOAT ,
    },
    latitude : {
        type : Sequelize.FLOAT ,
    },
    active : {
        type : Sequelize.BOOLEAN ,
        allowNull: false,
    }
});

Restaurant.hasMany(Room, { as: "rooms" })
Restaurant.hasMany(Menu, { as: "menus" })
Restaurant.hasMany(Image, { as: "images" })
Restaurant.hasOne(Planning, { as: "planning" });

module.exports = Restaurant;
