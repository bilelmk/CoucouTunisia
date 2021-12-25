const smsUtil = require("../util/sms")

exports.sendOneSms = async (req, res ,next) => {
    let isSmsSent = await smsUtil.sendOneSms(
        req.body.senderName,
        req.body.senderNumber,
        req.body.receiver,
        req.body.content
    )

    if (isSmsSent) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json('sms sent');
    } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json('error when sending sms');
    }
}
