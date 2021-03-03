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
        io.to(user.id).emit('message', { user: 'Chat Bot', text: `Only you can see this message.`, role: 'admin'});
        io.to(user.id).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`});
    // Public version.
    } else if (message.toLowerCase() === '?infopublic') {
        io.to(user.room).emit('message', { user: 'Chat Bot', text: `Everyone can see this message.`, role: 'admin'});
        io.to(user.room).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`});
    }
}

// Swear word filter to auto kick users.
const swearCheck = (socket, io, message, user) => {
    // Array of swearwords you get kicked for.
    const swearWords = ["nigger", "neger", "kanker"];
    const swearIndex = swearWords.indexOf(message.toLowerCase());

    if(message.toLowerCase() === swearWords[swearIndex]) {
        io.emit('message', { user: 'Chat Bot', text: `${user.name} has been kicked for inappropriate language in ${user.room}.`, role: 'admin' });

        kickUser(socket);
    }
}

// Calculate duration for typewriter animations
const calcDuration = (stringLength) => {
    let temp = stringLength * 0.055
    let output = `${temp}s`
    return output
}

const typeWriterText = (socket, typetext) => {
    return socket.emit(
        'message',
        {
            user: 'Chat Bot',
            text: typetext,
            role: 'admin',
            typewriter: { typestate: true, duration: calcDuration(typetext.length)}
        }
    );
}

// General welcome message for each channel
const welcomeMessage = (socket, user) => {
    typeWriterText(socket, `Welcome to ${user.room}, ${user.name}.`)
    socket.broadcast.to(user.room).emit(
        'message', { user: 'Chat Bot', text: `${user.name} has joined the fray!`, role: 'admin',typewriter: {typestate: true, duration: calcDuration(26)}}
    );
}

// Disconnect Message with typewriter animation.
const disconnectMessage = (socket, user) => {
    socket.broadcast.to(user.room).emit(
        'message', { user: 'Chat Bot', text: `${user.name} left the channel :(`, role: 'admin',typewriter: {typestate: true, duration: calcDuration(20 + user.name.length)}}
    );
}

// Introduction messages for when you get dropped in the rules channel.
const rulesIntroduction = (socket) => {
    // General Introduction
    setTimeout(() => {
        socket.emit('message', { text: `Here is a simple list of rules to follow.`});
    }, 2000);
    // Rules list
    setTimeout(() => {
        socket.emit('message', { user: 'Chat Bot', text: `* Don't be racist.`, role: 'admin'});
        socket.emit('message', { text: `* Don't use inappropriate language.` });
        socket.emit('message', { text: `* If you come across a bug, report it.` });
    }, 4200);
    // Conclusion
    setTimeout(() => {
        typeWriterText(socket, `Simple right?`)
    }, 6500);
    // Exit sentence
    setTimeout(() => {
        typeWriterText(socket, `Well, have fun!`)
    }, 8500)
}

module.exports = { infoCheck, swearCheck, rulesIntroduction, welcomeMessage, disconnectMessage }