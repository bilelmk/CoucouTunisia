const PhoneConfirmationCode = require("../models/phone-confirmation-code.model");

exports.create = async ( code ) => {
    let phoneConfirmationCode = await PhoneConfirmationCode.create({ code : code}) ;
    if(phoneConfirmationCode){
        return phoneConfirmationCode
    }
    else {
        return null ;
    }
}
