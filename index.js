
const express = require('express');
const server = express();
require ('dotenv').config();


const fs = require("fs");
const cors =  require("cors");
const { request } = require('http');
const { type } = require('os');

const { pemesananRoutes } = require('./routes/pemesanan.routes')

const PORT = 3000;
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.get("/",(request, response) => {
    response.send("Aku balikin responmu")
});

server.use("/pemesanan", pemesananRoutes);

server.all("*", async (req, res) => {
	res.json({
		message: "Routes tidak tersedia"
	})
})

server.listen(PORT, "0.0.0.0", () =>{
    console.log('iya udah nyala nih, silakan di cek aja di http://localhost:3000/')
});