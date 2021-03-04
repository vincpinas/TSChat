const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors')

const { addUser, removeUser, getUser, getUserInRoom } = require('./users');
const { infoCheck, swearCheck, rulesIntroduction, welcomeMessage, disconnectMessage } = require('./bot');

// If no production PORT is available it tries to run on PORT 5000 for development.
const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);

// Since v3 of Socket.io you need to fill in a CORS object otherwise it rejects any requests.
const io = socketio(server, {
    cors: {

    }
});


// Socket.io Event Handlers.
io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room, role: "default"});

        if(error) return socket.emit('error', error);

        console.log(user);

        if(user.room === 'rules') {
            welcomeMessage(socket, user);
            rulesIntroduction(socket);
        } else {
            welcomeMessage(socket, user);
        }

        socket.join(user.room);

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message, role: user.role });

        infoCheck(io, socket, message, user);
        swearCheck(socket, io, message, user);

        callback();
    });

    socket.on('disconnectUser', () => {
        const user = getUser(socket.id);

        try {
            disconnectMessage(socket, user)
        } catch {
            return null
        }

        removeUser(socket.id);
    });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Welcome, Server has started on port ${PORT}`));