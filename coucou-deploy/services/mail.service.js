const mailUtil = require("../util/mailer")

exports.sendOne = ( req, res , next ) => {
    mailUtil.sendEmail(req.body.content)
}
