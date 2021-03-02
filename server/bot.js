const { removeUser } = require("./users")

// Kick function to kick the user from all chat rooms.
const kickUser = (socket) => {
    // Socket event to kick the user back for whatever they did to the join screen.
    socket.emit('kickUser')
    // User helper function to remove the user from the current users array.
    removeUser(socket.id);
}

// All helper functions for the bot.
const infoCheck = (io, message, user) => {
    // Command to privately receive info on your socket.
    if(message.toLowerCase() === '?infoprivate') {
        io.to(user.id).emit('message', { user: 'Chat Bot', text: `Only you can see this message.`});
        io.to(user.id).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`});
    // Public version.
    } else if (message.toLowerCase() === '?infopublic') {
        io.to(user.room).emit('message', { user: 'Chat Bot', text: `Everyone can see this message.`});
        io.to(user.room).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`});
    }
}

// Swear word filter to auto kick users.
const swearCheck = (socket, io, message, user) => {
    // Array of swearwords you get kicked for.
    const swearWords = ["nigger", "neger", "kanker"];
    const swearIndex = swearWords.indexOf(message.toLowerCase());

    if(message.toLowerCase() === swearWords[swearIndex]) {
        io.emit('message', { user: 'Chat Bot', text: `${user.name} has been kicked for inappropriate language in ${user.room}.` });

        kickUser(socket);
    }
}

const rulesIntroduction = (socket, user) => {
    socket.emit('message', { user: 'Chat Bot', text: `Welcome to TS Chat ${user.name}!` });
    socket.emit('message', { text: `As you may have seen, I'm the Chat Bot, my role is to enfore rules in this place.` });
    socket.emit('message', { text: `Now, you may be wondering. What are these rules?` });
    socket.emit('message', { text: `Well I'll tell ya, here is a simple list of the current rules.` });
    setTimeout(() => {
        socket.emit('message', { user: 'Chat Bot', text: `* Don't be racist.` });
        socket.emit('message', { text: `* Don't use inappropriate language.` });
        socket.emit('message', { text: `* If you come across a bug, report it.` });
    }, 6000);
    setTimeout(() => {
        socket.emit('message', { user: 'Chat Bot', text: `Simple right?` });
    }, 8000);
    setTimeout(() => {
        socket.emit('message', { user: 'Chat Bot', text: `Well, have fun!` });
    }, 10000)
}

module.exports = { infoCheck, swearCheck, rulesIntroduction }