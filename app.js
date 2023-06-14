const express = require("express");
const socket = require("socket.io");

const app = express(); //initialize and server ready

app.use(express.static("public"));

let port = 3000;
let server = app.listen(port, () => {
    console.log("Listening to port " +port);
})

let io = socket(server);
io.on("connection", (socket) => {
    console.log("Socket connected");

    // Received data
    socket.on("beginPath", (data) => {
        // data -> data from frontend
        // Now transfer data to all connected devices
        io.sockets.emit("beginPath", data);
    });

    socket.on("drawStroke", (data) =>{
        io.sockets.emit("drawStroke", data);
    });

    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    });
})
