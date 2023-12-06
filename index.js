
const express = require('express');
const server = express();
require ('dotenv').config();


const fs = require("fs");
const cors =  require("cors");
const { request } = require('http');
const { type } = require('os');

const PORT = 3000;
server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.get("/",(request, response) => {
    response.send("Aku balikin responmu")
});

server.listen(PORT, () =>{
    console.log('iya udah nyala nih, silakan di cek aja di http://localhost:3000/')
})


server.get("/rooms", async (req, res) => {
    fs.readFile('./data/rooms.json', (error, data ) =>{
        if (error) res.send("Gagal dalam pencarian data")
        const rooms = JSON.parse(data)
        res.status(200).send(rooms)
    });

})

server.get("/rooms/:id", async (request, response) => {
    const{id} = request.params;


    fs.readFile('./data/rooms.json', (error, data ) =>{
        if (error) res.send("Gagal dalam pencarian data")
        const rooms = JSON.parse(data);
        const room = rooms.find((room) => room.id === parseInt(id));
        if (!room) {
            response.status(404).send("Rooms not found");
        }
        response.status(200).send(room);
    });

});

server.post("/rooms",  (req, res) => {
   
    console.log(req.body);
    const {type, price} = req.body
    fs.readFile("./data/rooms.json", (err, data) => {
        if (err) res.send ("Gagal dalam membaca JSON")
        const rooms = JSON.parse(data)
        const newrooms = {
            id: rooms.length + 1,
            type: type,
            price: price,
        }

        rooms.push(newrooms)

        fs,fs.writeFile("./data/rooms.json",JSON.stringify(rooms, '', 2), (err) => {
            if (err) res.status(404).send("Gagal dalam memasukkan data")
            res.status(201).send({
            message:"sukses menambahkan data"
        });
        })
    })

})



