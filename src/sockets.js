module.exports = function(io){

    // Escuchando con socket
    io.on('connection', socket =>{
        socket.on('send message', data=>{
           io.sockets.emit('new message', data)
        })
    })
}