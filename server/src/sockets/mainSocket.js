import { Server } from 'socket.io'

export default (server) => {
    const io = new Server(server, {
        cors: 'http:localhost:3000'
    });

    let rooms = {
        general: [],
        ciencia: [],
    }

    let users_connect = {

    }
    let clients_connect = {

    }
    //middlewares
    io.use((client, next) => {

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
            clients_connect[client.id] = username
            console.log(users_connect);
            return client.emit('info_message', { status: 200, message: 'OK' })
        })

        client.on('get-rooms', () => {
            client.emit('get-rooms', { rooms: Object.keys(rooms) })
        })


        client.on('join-room', (body) => {
            const roomsxx = io.of("/").adapter.rooms;
            console.log(roomsxx);
            const { name_room, username } = body
            if (!rooms[name_room]) {
                client.broadcast.emit('new_room', { new_room: name_room })
                client.emit('new_room', { new_room: name_room })
                rooms[name_room] = []
            }

            if (!rooms[name_room].includes(username)) {
                rooms[name_room].push(username)
            }

            io.to(name_room).emit('user_entered_room', { username, type: 'entered_user' })
            client.join(name_room)
            console.log(rooms);
        })

        client.on('leave-room', (body) => {
            const { name_room, username } = body
            client.leave(name_room)
            if (!rooms[name_room]) {
                return client.emit('info_message', { status: 400, message: 'La sala no existe' })
            }
            rooms[name_room] = rooms[name_room]?.filter(u => u !== username)
            io.to(name_room).emit('user_leave_room', { username, type: 'leave_user' })
            if (rooms[name_room].length === 0 && !['general', 'ciencia'].includes(name_room)) {
                delete rooms[name_room]
                client.broadcast.emit('delete_room', { name_room })
                client.emit('delete_room', { name_room })
            }
            console.log(rooms);
        })


        client.on('send-message-to-room', (body) => {
            const { toRoom, text, username } = body
            io.to(toRoom).emit(`received_message`, { text, username })
        })



        client.on('disconnect', () => {
            const username_delete = clients_connect[client.id]
            delete users_connect[username_delete]
            delete clients_connect[client.id]
            console.log(users_connect, clients_connect);
            console.log(client.id, 'DISCONNECT');
        })
    })








}