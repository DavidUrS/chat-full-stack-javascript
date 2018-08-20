module.exports = function(io){

    // Escuchando con socket
    io.on('connection', socket =>{
        console.log('New user conected')
    })
}