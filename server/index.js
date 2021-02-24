const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors')

const { addUser, removeUser, getUser, getUserInRoom } = require('./users');

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
        const { error, user } = addUser({ id: socket.id, name, room});

        if(error) return callback(error)

        console.log(user)

        socket.emit('message', { user: 'Chat Bot', text: `Welcome to ${user.room}, ${user.name}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'Chat Bot', text: `${user.name} has joined the fray!` });

        socket.join(user.room);

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        if(message === '?help') {
            io.to(user.room).emit('message', { user: 'Chat Bot', text: `Here is a list of commands to help you.`})
        }

        callback();
    });

    socket.on('disconnectUser', () => {
        const user = getUser(socket.id);

        socket.broadcast.to(user.room).emit('message', { user: 'Chat Bot', text: `${user.name} left the channel :(` });
        removeUser(socket.id)
    })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Welcome, Server has started on port ${PORT}`));