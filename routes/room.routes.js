import { Router } from "express";
const roomRoutes = Router();
import { prisma } from "../config/prisma";

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
    const { name, harga } = req.body;
    if (!name || !harga || isNaN(harga)) {
        res.status(400).json({ error: "Invalid or missing 'name' or 'harga' in the request body" });
        return;
    }
    const newRoom = await prisma.room.create({
        data: {
            name: name,
            harga: parseInt(harga),
        },
    });
    res.status(201).json({
        room: "room Dibuat",
        data: newRoom,
    });
});

roomRoutes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.room.delete({
        where: {
            id: parseInt(id)
        },
    });
    res.status(200).json({
        room: `room with id: ${id} successfully deleted`,
    });
});

export default { roomRoutes };