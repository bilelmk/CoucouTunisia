let io ;

module.exports = {
    init: (httpServer , option) => {
        io = require("socket.io")(httpServer , option);
        return io
    },
    // getSocket: () => {
    //     if(!io) {
    //         throw new Error('Socket.io not initialized')
    //     }
    //     return io ;
    // }
}
