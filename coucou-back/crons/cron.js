const cron = require('node-cron');
const reservationService = require("../services/reservation.service")
const smsUtil = require("../util/sms")
const fs = require('fs');
const Menu = require("../models/menu.model");
const Image = require("../models/image.model");
const Restaurant = require('../models/restaurant.model')
const Room = require("../models/room.model");



exports.runCrons = () => {

    cron.schedule('00 06 * * *', async () => {
        const reservations = await reservationService.getTodayReservations();
        if(reservations !== null) {
            // for(const reservation of reservations){
            //     const isSent = await smsUtil.sendOneSms(
            //         'CocoTunisia',
            //         50109769,
            //         reservation.dataValues.client.phone,
            //         reservation.dataValues.restaurant.smsMessage || "",
            //     )
            // }
        }
    });

    // delete unused images from fs
    cron.schedule('48 01 * * *', async () => {
        try {

            // get all image name from data base
            let imageList = [];
            const menus = await Menu.findAll();
            const images = await Image.findAll();
            const restaurants = await Restaurant.findAll();
            const rooms = await Room.findAll();
            if(menus) imageList.push(...menus.map(item => { return item.image}))
            if(images) imageList.push(...images.map(item => { return item.image}))
            if(restaurants) imageList.push(...restaurants.map(item => { return item.image}))
            if(rooms) imageList.push(...rooms.map(item => { return item.image}))

            // get image name from fs and delete unused ones
            fs.readdir("./upload", (err, filenames) => {
                if (err) {
                    console.log(err)
                    return;
                }
                for(let image of filenames) {
                    if(!imageList.includes(image)) fs.unlinkSync("./upload/" + image )
                }
            });
        }
        catch(err) { console.log(err) }
    });
}
