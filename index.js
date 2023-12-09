// const connection = require('./app/model/index')
const express = require('express');
const server = express();
require ('dotenv').config();


const fs = require("fs");
const cors =  require("cors");
const { request } = require('http');
const { type } = require('os');

const { pemesananRoutes } = require('./routes/pemesanan.routes');
const { roomRoutes } = require('./routes/room.routes');
const { messageRoutes } = require('./routes/message.routes'); 

const PORT = 3000;
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.get("/",(request, response) => {
    response.send("Aku balikin responmu")
});

server.use("/pemesanan", pemesananRoutes);
server.use("/room", roomRoutes);
server.use("/message", messageRoutes);

server.all("*", async (req, res) => {
	res.json({
		message: "Routes tidak tersedia"
	})
})

server.listen(PORT, "0.0.0.0", () =>{
    console.log('iya udah nyala nih, silakan di cek aja di http://localhost:3000/')
});