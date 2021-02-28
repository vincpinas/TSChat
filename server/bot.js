// All helper functions for the bot.
const infoCheck = (io, message, user) => {
    if(message.toLowerCase() === '?infoprivate') {
        io.to(user.id).emit('message', { user: 'Chat Bot', text: `Only you can see this message.`})
        io.to(user.id).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`})
    } else if (message.toLowerCase() === '?infopublic') {
        io.to(user.room).emit('message', { user: 'Chat Bot', text: `Everyone can see this message.`})
        io.to(user.room).emit('message', { text: `Socket: { ${user.id} } Room: { ${user.room} } Name: { ${user.name} }`})
    }
}


module.exports = { infoCheck }