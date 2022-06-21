const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helpers = require("../helpers/helpers");
const Client = require("../models/client.model");
const PhoneConfirmationCode = require("../models/phone-confirmation-code.model");
const ResetPasswordCode = require('../models/reset-password-code.model');
const smsUtil = require("../util/sms")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.signup = async (req, res, next) => {
    let client = await Client.findOne({ where: { phone: req.body.phone } })
    if (client) {
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
                // code: '0000'
            }
            Client.create(req.body,
                { include: [PhoneConfirmationCode] }).then(async result => {
                    const senderNumber = 50109769;
                    const senderName = "CocoBeach";
                    let content = "Your confirmation code: " + req.body.phoneConfirmationCode.code;
                    try {
                        let isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, req.body.phone, content)
                        if (isSmsSent) {
                            res.status(201).json({
                                user: result,
                            });
                        } else {
                            res.status(500).json({
                                message: "user created and sms not sent",
                                user: result
                            });
                        }
                    } catch (error) {
                        res.status(500).json({
                            message: "user created and sms not sent",
                            user: result
                        });
                    }
                }).catch(err => {
                    res.status(500).json({
                        message: "user not created"
                    });
                });
        })
        // send sms
        const senderNumber = 50109769;
        const senderName = "CocoBeach" ;
        let content = "Your confirmation code: " + phoneConfirmationCode.code ;
        let isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, req.body.phone , content)
        if (isSmsSent) {
            return res.status(200).json(newClient);
        } else {
            return res.status(500).json({
                message: "user created and sms not sent"
            });
        }
    }

}

exports.signin = async (req, res, next) => {
    try {
        const fetchedClient = await Client.findOne({ where: { phone: req.body.phone } });
        if (!fetchedClient) {
            return res.status(401).json({
                message: "wrong phone number"
            });
        }
        const checkPassword = await bcrypt.compare(req.body.password, fetchedClient.password);
        if (!checkPassword) {
            return res.status(401).json({
                message: "wrong password"
            });
        }
        else {
            let isVerified = await fetchedClient.verified;
            if (isVerified) {
                const token = await jwt.sign(
                    { phone: fetchedClient.phone, userId: fetchedClient.id },
                    "secret_this_should_be_longer",
                    { expiresIn: "5h" }
                );
                res.status(200).json({
                    token: token,
                    expiresIn: 3600,
                    userId: fetchedClient.id
                });
            } else {
                res.status(401).json({
                    message: "phone not verified",
                    userId: fetchedClient.id
                });
            }
        }
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

exports.checkPhoneVerificationCode = async (req, res, next) => {
    try {
        const { code } = req.body
        const phoneConfirmationCode = await PhoneConfirmationCode.findOne({ where: { code: code } })
        if (!phoneConfirmationCode) return res.status(404).json({
            message: 'code not found'
        })
        const isValidCode = new Date(Date.now()).getTime() - new Date(phoneConfirmationCode.createdAt).getTime() <= 7200000
        if (!isValidCode) return res.status(401).json({
            message: 'code is expired'
        })
        PhoneConfirmationCode.destroy({ where: { id: phoneConfirmationCode.id } })
        const updateResult = await  Client.update({ verified: true }, { where: { id: phoneConfirmationCode.clientId } })
        if(!updateResult) return res.status(500).json({
                message: "can not update client"
        });
        if (updateResult[0]) return res.status(200).json({
                clientId: phoneConfirmationCode.clientId,
                message: 'code is verified'
        });
        else return res.status(404).json({
                message: "not found"
        });

    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

exports.checkResetPasswordCode = async (req, res, next) => {
    try {
        const { code } = req.body
        const resetPasswordCode = await ResetPasswordCode.findOne({ where: { code: code } })
        if (!resetPasswordCode) return res.status(404).json({
            message: 'code not found'
        })
        const isValidCode = new Date(Date.now()).getTime() - new Date(resetPasswordCode.createdAt).getTime() <= 7200000
        if (!isValidCode) return res.status(401).json({
            message: 'code is expired'
        })
        ResetPasswordCode.destroy({ where: { id: resetPasswordCode.id } })
        return res.status(200).json({
            clientId: resetPasswordCode.clientId,
            message: 'code is verified'
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

exports.sendResetPasswordCode = async (req, res, next) => {
    try {
        const { phone } = req.body
        if (!phone) return res.status(400).json({
            message: 'phone is required'
        })
        const client = await Client.findOne({ where: { phone: phone } })

        if (!client) return res.status(405).json({
            message: 'client not found'
        })
        const resetPasswordCode = await ResetPasswordCode.create({
            clientId: client.id,
            code: helpers.random()
        })

        const senderNumber = 50109769;
        const senderName = "CocoBeach";
        let content = "Your reset password code: " + resetPasswordCode.code;
        const isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, phone, content)
        if (isSmsSent) {
            res.status(200).json({
                message: 'reset password code has been sent',
            });
        } else {
            res.status(500).json({
                message: "sms not sent"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

exports.resetPassowrd = async (req, res, next) => {
    try {
        const { password, clientId } = req.body
        if (!clientId) return res.status(400).json({
            message: 'clientId is required'
        })
        const hashedPassword = await bcrypt.hash(password, 10)
        const client = await Client.update({ password: hashedPassword }, { where: { id: clientId } })
        if (client) return res.status(200).json({
            message: 'password has been updated'
        })
        return res.status(404).json({
            message: 'client not found'
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        })
    }
}

exports.getMany = (req, res, next) => {
    let key = "%" + req.body.key + "%"
    Client.findAndCountAll({
        limit: req.body.limit,
        offset: req.body.offset,
        where: {
            [Op.or]: [
                { phone: { [Op.like]: key } },
                { firstName: { [Op.like]: key } },
                { lastName: { [Op.like]: key } },
            ]
        }
    }).then(data => {
        return res.status(200).json({
            data
        });
    }).catch(err => {
        return res.status(500).json(err);
    });
}

exports.getOne = (req, res, next) => {
    Client.findOne({ where: { id: req.params.id}})
        .then(data => {
            return res.status(200).json({
                data
            });
        }).catch(err => {
        return res.status(500).json({
            message: "no row found"
        });
    });
}

exports.getAllLower = (req, res, next) => {
    Client.findAll({ attributes: ['id', 'firstName', 'lastName', 'phone'] }).then(clients => {
        return res.status(200).json(clients);
    }).catch(err => {
        return res.status(500).json(err);
    });
}
