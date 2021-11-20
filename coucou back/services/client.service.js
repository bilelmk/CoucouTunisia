const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helpers = require("../helpers/helpers");
const Client = require("../models/client.model");
const PhoneConfirmationCode = require("../models/phone-confirmation-code.model");
const smsUtil = require("../util/sms")

exports.signup = async (req, res, next) => {
    let client = await Client.findOne({where: {phone: req.body.phone}})
    if(client) {
        return res.status(405).json({
            message: "existing user"
        });
    }
    else {
        bcrypt.hash(req.body.password, 10).then(hash => {
            req.body.password = hash
            req.body.verified = false
            req.body.active = true
            req.body.signupSource = ''
            req.body.phoneConfirmationCode = {
                code: helpers.random()
            }
            Client.create(req.body ,
                { include : [ PhoneConfirmationCode ]}).then( async result => {

                const senderNumber = 50109769;
                const senderName = "CocoBeach" ;
                let content = "Your confirmation code: " + req.body.phoneConfirmationCode.code ;

                let isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, req.body.phone , content)
                if (isSmsSent) {
                    res.status(200).json({
                        id: result,
                    });
                } else {
                    res.status(500).json({
                        message: "user created and sms not sent"
                    });
                }
            }).catch(err => {
                res.status(500).json({
                    message: "user not created"
                });
            });
        })
    }
}

exports.signin = async (req, res, next) => {
    let fetchedClient = await Client.findOne({where: {phone: req.body.phone}});
    if (fetchedClient) {
        let checkPassword = await bcrypt.compare(req.body.password, fetchedClient.password) ;
        if(!checkPassword){
            res.status(401).json({
                message: "wrong password"
            });
        }
        else {
            let isVerified = await fetchedClient.verified ;
            if(isVerified){
                const token = await jwt.sign(
                    {phone: fetchedClient.phone, userId: fetchedClient.id},
                    "secret_this_should_be_longer",
                    {expiresIn: "5h"}
                );
                res.status(200).json({
                    token: token,
                    expiresIn: 3600
                });
            } else {
                res.status(401).json({
                    message: "phone not verified" ,
                    userId: fetchedClient.id
                });
            }
        }
    }
    else {
        res.status(401).json({
            message: "wrong phone number"
        });
    }
}

exports.checkPhoneVerificationCode = async (req, res, next) => {
    let fetchedClient = await Client.findOne(
        { where: {'$PhoneConfirmationCode.code$': req.body.verificationCode },
        include: [{
            model: PhoneConfirmationCode,
            as: 'phoneConfirmationCode'
        }]
    });
    if(fetchedClient) {
        Client.update(
            { verified : true , '$PhoneConfirmationCode.code$': null }, {where: { id: fetchedClient.id }}).then( result => {
            if(result[0] === 1) {
                return res.status(200).json({
                    message: "success"
                });
            }
            return res.status(404).json({
                message: "not found"
            });
        }).catch(err => {
            return res.status(500).json({
                message: "server error"
            });
        })
    } else {
        res.status(405).json({
            message: "wrong verification code"
        });
    }
}

exports.checkResetPasswordCode = async (req, res, next) => {
    // todo
}

exports.sendResetPasswordCode = async (req, res, next) => {
    // todo
}

exports.resetPassowrd = async (req, res, next) => {
    // todo
}
