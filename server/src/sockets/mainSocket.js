import { Server } from 'socket.io'

export default (server) => {
    const io = new Server(server, {
        cors: 'http:localhost:3000'
    });

    let rooms = {

    }

    let users_connect = {

    }
    //middlewares
    io.use((client, next) => {
        console.log('entra siempre', client.handshake);
        next()
    })


    io.on('connection', async (client) => {
        console.log('A client connect!', client.id)



        client.on('new_user', (body) => {
            const { username } = body

            if (users_connect[username]) {
                return client.emit('info_message', { status: 400, message: 'El nombre de usuario ya se encuentra en uso' })
            }

            users_connect[username] = client.id
            console.log(users_connect);
            return client.emit('info_message', { status: 200, message: 'OK' })
        })



        client.on('join-room', (body) => {
            const { name_room, username } = body
            if (!rooms[name_room]) {
                client.broadcast.emit('new_room', { new_room: name_room })
                rooms[name_room] = []
            }
            client.join(name_room)
            if (!rooms[name_room].includes(username)) {
                rooms[name_room].push(username)
            }
            rooms[name_room].push(username)
            io.to(name_room).emit('user_entered_room', { username })
            console.log(rooms);
        })


        client.on('leave-room', (body) => {
            const { name_room, username } = body
            client.leave(name_room)
            rooms[name_room] = rooms[name_room]?.filter(u => u !== username)
            io.to(name_room).emit('user_leave_room', { username })

            if (rooms[name_room].length === 0) {
                rooms[name_room] = undefined
                client.broadcast.emit('delete_room', { name_room })
            }

            console.log(client.rooms, rooms);
        })

        client.on('send-message-to-room', (body) => {
            const { toRoom, text, username } = body
            io.to(toRoom).emit('received_message', { text, username })
        })

        client.on('disconnect', () => {
            console.log(client.id, 'DISCONNECT');

        })
    })








}