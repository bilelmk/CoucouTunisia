const cron = require('node-cron');
const couponService = require("../services/coupon.service")

exports.runCrons = () => {
    cron.schedule('00 00 * * *', () => {
        console.log('nos elil');
        // couponService.deleteExpiredCoupon() ;
    });

    // just for test
    cron.schedule('* * * * *', () => {
        console.log('wiiiiiw per second');
    });
}

