const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helpers = require("../helpers/helpers");
const Client = require("../models/client.model");
const PhoneConfirmationCode = require("../models/phone-confirmation-code.model");
const ResetPasswordCode = require('../models/reset-password-code.model');
const smsUtil = require("../util/sms")
const sequelizeObject = require('sequelize');
const Op = sequelizeObject.Op;
const sequelize = require("../util/database-config");


exports.signup = async (req, res, next) => {
    try {
        // verify if client is already exist
        const client = await Client.findOne({ where: { phone: req.body.phone } })
        if (client) {
            return res.status(405).json({
                message: "existing user"
            });
        }
        // hash password
        const hash = await bcrypt.hash(req.body.password, 10) ;
        if(!hash){
            return res.status(405).json({
                message: "can not hash password"
            });
        }

        const transaction = await sequelize.transaction();

        // create client
        req.body.password = hash
        req.body.verified = false
        req.body.active = true
        req.body.signupSource = 'PHONE'
        let newClient = await Client.create(req.body , { transaction }) ;
        if(!newClient) {
            return res.status(500).json({
                message: "user not created"
            });
        }
        // create confirmation code
        const phoneConfirmationCode = await PhoneConfirmationCode.create({
            clientId: newClient.id,
            code: helpers.random()
        } , { transaction })
        // send sms
        const senderNumber = 50109769;
        const senderName = "CocoTunisia" ;
        let content = "Votre code de confirmation est : " + phoneConfirmationCode.code ;
        let isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, req.body.phone , content)
        if (isSmsSent) {
            await transaction.commit();
            return res.status(200).json(newClient);
        } else {
            await transaction.rollback();
            return res.status(500).json({
                message: "sms not sent"
            });
        }
    }
    catch (err) {
        return res.status(500).json(err)
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
        const isActive = await fetchedClient.active;
        if (!isActive) {
            return res.status(401).json({
                message: "account bloqued"
            });
        }
        const isVerified = await fetchedClient.verified;
        if (isVerified) {
            const token = await jwt.sign(
                { phone: fetchedClient.phone, userId: fetchedClient.id },
                "secret_this_should_be_longer",
                { expiresIn: "1h" }
            );
            return res.status(200).json({
                token: token,
                expiresIn: 3600
            });
        } else {
            return res.status(401).json({
                message: "phone not verified",
                userId: fetchedClient.id
            });
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

exports.sendPhoneVerificationCode = async (req, res, next) => {
    try {
        const client = await Client.findByPk(req.body.id)
        if (!client) return res.status(405).json({
            message: 'client not found'
        })
        const phoneVerificationCode = await PhoneConfirmationCode.create({
            clientId: client.id,
            code: helpers.random()
        })

        const senderNumber = 50109769;
        const senderName = "CocoTunisia";
        let content = "Votre code de confirmation est : " + phoneVerificationCode.code;
        const isSmsSent = await smsUtil.sendOneSms(senderName, senderNumber, client.phone, content)
        if (isSmsSent) {
            res.status(200).json({
                message: 'phone confirmation code has been sent',
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
        const senderName = "CocoTunisia";
        let content = "Votre code de réinitialisation est : " + resetPasswordCode.code;
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
        if (client[0] === 1) return res.status(200).json({
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

exports.getMany = async (req, res, next) => {
    try {
        let key = "%" + req.body.key + "%"
        const clients = await Client.findAndCountAll({
            limit: req.body.limit,
            offset: req.body.offset,
            where: {
                [Op.or]: [
                    {phone: {[Op.like]: key}},
                    {firstName: {[Op.like]: key}},
                    {lastName: {[Op.like]: key}},
                ]
            }
        })
        return res.status(200).json(clients);

    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const client = await Client.findByPk(req.userData.userId) ;
        if(client) return res.status(200).json(client);
        else return res.status(404).json({message: 'client not found'})
    }
    catch(err) {
        return res.status(500).json(err);
    }
}

exports.getAllLower = async (req, res, next) => {
    try {
        const clients = await Client.findAll({attributes: ['id', 'firstName', 'lastName', 'phone']})
        return res.status(200).json(clients);
    } catch (err) {
        return res.status(500).json(err);
    }
}

exports.block = ( req, res , next , id ) => {
    Client.update({ active: false }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
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
}

exports.deblock = ( req, res , next , id ) => {
    Client.update({ active: true }, {where: { id: id }}).then(result => {
        if(result[0] === 1){
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
}

exports.changeImage = ( req, res , next , id ) => {
    let image = req.files.image[0].filename ;
    Client.update({ image: image }, {where: { id: req.userData.userId }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json({
                image: image
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
}

exports.update = ( req, res , next ) => {
    Client.update(
        {   firstName: req.body.firstName ,
            lastName: req.body.lastName,
            email: req.body.email ,
        }, { where: { id: req.userData.userId }}).then(result => {
        if(result[0] === 1){
            return res.status(200).json(result);
        }
        return res.status(404).json({message: "not found"});
    }).catch(err => {
        return res.status(500).json({message: "server error"});
    })
}

