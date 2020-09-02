var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var clients = [];
io.on("connection", (socket) => {
    console.log("Client connected");
    clients.push(socket);

    socket.on('chat', message=>{
        clients.forEach(client=>{
            io.emit('chat', message);
        });
    });

    socket.on('disconnect', () =>{
        clients.pop(socket);
        console.log('Client disconnected')
    });
})
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
module.exports = {"app": app, "server":http, "socket":io}
