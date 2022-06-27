const OneSignal = require('onesignal-node');
require('dotenv').config();

const client = new OneSignal.Client(process.env.ONESIGNAL_APPID, process.env.ONESIGNAL_AUTHTOKEN)

module.exports = (content,filter=[],included_segments=[]) => {
    return client.createNotification({
        contents: content,
        included_segments:included_segments,
        filter:filter
    })
}
