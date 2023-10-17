let io;
module.exports = {
    init : (httpServer) => {
        io = require('socket.io')(httpServer,{
            cors: {
                origin: 'http://localhost:3000',
                methods: ['GET', 'POST'],
            },
        })
        return io
    },
    getIo: () => {
        if(!io){
            return new Error('Socket not connected')
        }
        return io
    }
}