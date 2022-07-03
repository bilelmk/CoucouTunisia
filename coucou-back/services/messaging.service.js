const smsUtil = require("../util/sms")

exports.sendOneSms = async (req, res ,next) => {
    let isSmsSent = await smsUtil.sendOneSms(
        req.body.senderName,
        req.body.senderNumber,
        req.body.receiver,
        req.body.content
    )
    if (isSmsSent) {
        res.status(500).json({message : 'error when sending sms'});
    } else {
        res.status(200).json({message : "sms sent"});
    }
}


exports.sendMultiSms = async (req, res ,next) => {
    for(let number of req.body.numbers) {
        let isSmsSent = await smsUtil.sendOneSms(
            req.body.senderName,
            req.body.senderNumber,
            number.number,
            req.body.content
        )
        if (!isSmsSent) {
            res.status(500).json({message : 'error when sending sms'});
        }
    }
    res.status(200).json({message : "sms sent"});
}

exports.getUsage = async (req, res ,next) => {
    const usage = await smsUtil.getUsage() ;
    if(usage) {
        res.status(200).json(usage);
    } else {
        res.status(500).json({message : 'internal erreur'});
    }
}
