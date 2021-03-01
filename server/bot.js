const { removeUser } = require("./users")

// All helper functions for the bot.
const infoCheck = (io, message, user) => {
    // Command to privately receive info on your socket.
    if(message.toLowerCase() === '?infoprivate') {
        io.to(user.id).emit('message', { user: 'Chat Bot', text: `Only you can see this message.`})
        io.to(user.id).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`})
    // Public version.
    } else if (message.toLowerCase() === '?infopublic') {
        io.to(user.room).emit('message', { user: 'Chat Bot', text: `Everyone can see this message.`})
        io.to(user.room).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`})
    }
}

// Swear word filter to auto kick users.
const swearCheck = (socket, io, message, user) => {
    // Array of swearwords you get kicked for.
    const swearWords = ["nigger", "neger", "kanker"];
    const swearIndex = swearWords.indexOf(message.toLowerCase());

    if(message.toLowerCase() === swearWords[swearIndex]) {
        io.emit('message', { user: 'Chat Bot', text: `${user.name} has been kicked for inappropriate language in ${user.room}.` });

        socket.emit('kickUser')
        removeUser(socket.id)
    }
}


module.exports = { infoCheck, swearCheck }