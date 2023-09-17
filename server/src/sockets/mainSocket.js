import { Server } from 'socket.io'
export default (server) => {
    const io = new Server(server, {
        cors: '*'
    });

    io.on('connection', async (client) => {
        console.log('A client connect!',)

    })
}