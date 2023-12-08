const express = require('express');
const roomRouter = express.Router();

roomRouter.get("/rooms", async (req, res) => {
	const connection = await connectionPool.getConnection();
	try {
		const [rooms] = await connection.query(`SELECT * FROM Room`);
		console.log(rooms);
		res.status(200).send(rooms);
	} catch (error) {
		console.log(error);
	}
});

roomRouter.get("/rooms/:id", async (request, response) => {
	const { id } = request.params;
	const connection = await connectionPool.getConnection();
	try {
		const [rooms] = await connection.query(
			`SELECT * FROM Product WHERE id = ?`,
			[id]
		);
		console.log(rooms);
		if (!products.length) {
			response.status(404).send("Rooms not found");
		} else {
			response.status(200).send(rooms);
		}
	} catch (error) {
		console.log(error);
	}
});

roomRouter.post("/rooms",  (req, res) => {
   
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

});

module.exports = { roomRouter };