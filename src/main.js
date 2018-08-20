const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const Server = http.createServer(app);
const io = socketio.listen(Server);
const path = require('path');
require('./sockets')(io);

//Definiendo el puerto
var port = process.env.PORT || 3000;

// Usando archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//Levantando el servidor
Server.listen(port,(req,res)=>{
    console.log(`Server on port ${port}`)
})