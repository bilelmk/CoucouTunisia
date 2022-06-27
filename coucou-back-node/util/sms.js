const axios = require('axios')

getToken = async () => {
    // set request body
    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')
    // send get token request
    let result = await axios.post('https://api.orange.com/oauth/v3/token', params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic WngyZjRzcjhFSzBrWkJ5Q3pBV1dZRTdrSXdGUnhhb0g6OGlxelJydjJGUGlSSEdxVg=='
            }
        }
    )
    if(result.status === 200) return result.data.access_token ;
    else return null ;
}

send = async (token , name , senderNumber , receiverNumber , content) => {
    // send sms
    let result = await axios.post('https://api.orange.com/smsmessaging/v1/outbound/tel%3A%2B21650109769/requests',
        JSON.stringify({
            "outboundSMSMessageRequest": {
                "address": "tel:+216" + receiverNumber,
                "senderAddress": "tel:+216" + senderNumber ,//50109769,
                "senderName":name,
                "outboundSMSTextMessage": {
                    "message": content
                }
            }
        }),
        {
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
    )
    if(result.status === 201) return true ;
    else return null ;
}

exports.sendOneSms = async (senderName , senderNumber, receiver , content) => {
    let token = await getToken()
    if(token){
        let isSmsSent = await send(token ,
            senderName ,
            senderNumber ,
            receiver,
            content
        )
        if(isSmsSent) return true ;
        else return null ;
    }
    return null ;
}
