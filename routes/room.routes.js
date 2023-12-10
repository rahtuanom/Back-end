const express = require("express");
const roomRoutes = express.Router();
const { prisma } = require("../config/prisma");

roomRoutes.get("/", async (req, res) => {
    const room = await prisma.room.findMany();
    res.status(200).send(room);
});

roomRoutes.get("/:id", async (req, res) => {
    const room = await prisma.room.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    if (!room)
    res.status(404).json({
        room: "room tidak tersedia",
    });
    else res.status(200).json(room);
});

roomRoutes.post("/", async (req, res) => {
    const { name } = req.body;
    const newRoom = await prisma.room.create({
        data: {
            name: req.body.name,
            harga: parseInt(req.body.harga)
        },
    });
    res.status(201).json({
        room: "room Dibuat",
        data: newroom,
    });
});

roomRoutes.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const updatedRoom = await prisma.room.update({
		where: { id: parseInt(id) },
		data: { name: name },
	});
	res.status(200).json({
		room: `room with id: ${id} is updated`,
		data: updatedroom,
	});
});

roomRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.roomRoutes.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		room: `room with id: ${id} successfully deleted`,
	});
});

module.exports = { roomRoutes };