let  socket = io();
let  el;

socket.on('time', function (timeString){
    el = document.getElementById("server-time");
    el.innerHTML = "Server time: " + timeString;
});

socket.on('chat', function (message){

});