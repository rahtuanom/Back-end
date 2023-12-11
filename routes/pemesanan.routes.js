const express = require("express");
const pemesananRoutes = express.Router();
const {
    prisma
} = require("../config/prisma");

pemesananRoutes.post("/", async (req, res) => {
    try {
        console.log("Received form data:", req.body); // Logging untuk memeriksa data yang diterima

        const checkInDate = new Date(Date.parse(req.body.checkin));
        const checkOutDate = new Date(Date.parse(req.body.checkout));

        const newPemesanan = await prisma.pemesanan.create({
            data: {
                name: req.body.full_name,
                email: req.body.email,
                check_in: checkInDate.toISOString(),
                check_out: checkOutDate.toISOString(),
                adults: req.body.adults,
                childs: req.body.childs,
                rooms: req.body.rooms,
                type_room: req.body.typeRoom,
            },
        });

        res.status(200).json(newPemesanan);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

pemesananRoutes.get("/", async (req, res) => {
    try {
        const Pemesanan = await prisma.pemesanan.findMany();
        if (Pemesanan) {
            res.status(200).json(Pemesanan);
        } else {
            res.status(404).json({
                message: "Pemesanan not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

//
pemesananRoutes.get("/", async (req, res) => {
    const pemesanan = await prisma.pemesanan.findMany();
    res.status(200).send(pemesanan);
});

pemesananRoutes.get("/:id", async (req, res) => {
    const pemesanan = await prisma.pemesanan.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    if (!pemesanan)
        res.status(404).json({
            message: "pemesanan tidak tersedia",
        });
    else res.status(200).json(pemesanan);
});

module.exports = {pemesananRoutes};