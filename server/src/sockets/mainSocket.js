import { Server } from 'socket.io'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';
export default (server) => {
    const io = new Server(server, {
        cors: 'https://nt4mmhp7-3000.use2.devtunnels.ms/'
    });

    let rooms = {
        general: [],
        ciencia: [],
    }

    let users_connect = {

    }
    let clients_connect = {

    }

    io.on('connection', async (client) => {
        console.log('A client connect!', client.id)

        client.on('new_user', (body) => {
            const { username } = body
            if (users_connect[username]) {
                return client.emit('info_message', { status: 400, message: 'El nombre de usuario ya se encuentra en uso' })
            }
            const sessionId = uuidv4()
            users_connect[username] = { userId: client.id, currentRoom: '', sessionId }
            clients_connect[client.id] = username
            const tkn = jwt.sign({ sessionId }, process.env.KEY_SECRET)
            return client.emit('info_message', { status: 200, message: 'OK', tkn })
        })

        client.on('get-rooms', () => {
            client.emit('get-rooms', { rooms: Object.keys(rooms) })
        })


        client.on('join-room', (body) => {
            try {
                const { name_room, username, colorUser, tkn } = body
                if (!tkn) return client.emit('info_message', { status: 401, message: 'Debe de proveer un token' })
                jwt.verify(tkn, process.env.KEY_SECRET)

                const dataUser = users_connect[clients_connect[client.id]]
                if (!dataUser) {
                    return client.emit('info_message', { status: 401, message: 'Debes registrarte con nombre de usuario para continuar' })
                }

                if (!rooms[name_room]) {
                    client.broadcast.emit('new_room', { new_room: name_room })
                    client.emit('new_room', { new_room: name_room })
                    rooms[name_room] = []
                }

                if (!rooms[name_room].includes(username)) {
                    dataUser.currentRoom = name_room
                    users_connect[username] = dataUser
                    rooms[name_room].push(username)
                }

                io.to(name_room).emit('user_entered_room', { username, colorUser, type: 'entered_user' })
                client.join(name_room)
                console.log(rooms);
            } catch (e) {
                if (e instanceof jwt.JsonWebTokenError) {
                    return client.emit('info_message', { status: 403, message: 'Token Invalido' })
                }
            }
        })

        client.on('leave-room', (body) => {
            const { name_room, colorUser, username, tkn } = body
            client.leave(name_room)
            if (!rooms[name_room]) {
                return client.emit('info_message', { status: 404, message: 'La sala no existe' })
            }
            rooms[name_room] = rooms[name_room]?.filter(u => u !== username)
            io.to(name_room).emit('user_leave_room', { username, colorUser, type: 'leave_user' })
            if (rooms[name_room].length === 0 && !['general', 'ciencia'].includes(name_room)) {
                delete rooms[name_room]
                client.broadcast.emit('delete_room', { name_room })
                client.emit('delete_room', { name_room })
            }

        })


        client.on('send-message-to-room', (body) => {
            try {
                const { toRoom, text, username, colorUser, tkn } = body
                if (!tkn) return client.emit('info_message', { status: 401, message: 'Debe de proveer un token' })
                jwt.verify(tkn, process.env.KEY_SECRET)

                const dataUser = users_connect[clients_connect[client.id]]

                if (!dataUser) {
                    return client.emit('info_message', { status: 401, message: 'Debes registrarte con nombre de usuario para continuar' })
                }

                io.to(toRoom).emit(`received_message`, { text, colorUser, username })
            } catch (e) {
                if (e instanceof jwt.JsonWebTokenError) {
                    return client.emit('info_message', { status: 403, message: 'Token Invalido' })
                }
            }

        })



        client.on('disconnect', () => {
            const username_delete = clients_connect[client.id]
            const currentRoomUser = users_connect[username_delete]?.currentRoom
            if (currentRoomUser && currentRoomUser !== '') {
                rooms[currentRoomUser] = rooms[currentRoomUser]?.filter(u => u !== username_delete)
                io.to(currentRoomUser).emit('user_leave_room', { username: username_delete, type: 'disconnect_user' })
            }
            delete users_connect[username_delete]
            delete clients_connect[client.id]
            //console.log(users_connect, clients_connect);
            console.log(client.id, 'DISCONNECT');
        })
    })
}