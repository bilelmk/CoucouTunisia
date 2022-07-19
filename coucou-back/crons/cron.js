const cron = require('node-cron');
const couponService = require("../services/coupon.service")
const reservationService = require("../services/reservation.service")
const smsUtil = require("../util/sms")

exports.runCrons = () => {
    cron.schedule('00 06 * * *', async () => {
        const reservations = await reservationService.getTodayReservations();
        if(reservations !== null) {
            for(const reservation of reservations){
                const isSent = await smsUtil.sendOneSms(
                    'CocoTunisia',
                    50109769,
                    reservation.dataValues.client.phone,
                    reservation.dataValues.restaurant.smsMessage || "",
                )
            }
        }
    });
}

