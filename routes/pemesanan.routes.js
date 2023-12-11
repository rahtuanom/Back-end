const express = require("express");
const pemesananRoutes = express.Router();
const { prisma } = require("../config/prisma");

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

pemesananRoutes.post("/", async (req, res) => {
    const { name, email, check_in, check_out, adults, childs, rooms, type_room } = req.body;
    try {
        const newPemesanan = await prisma.pemesanan.create({
            data: {
                name: name,
                email: email,
                check_in: check_in,
                check_out: check_out,
                adults: adults,
                childs: childs,
                room: rooms,
                type_room: type_room
            },
        });
        res.status(201).json({
            message: "Pemesanan Dibuat",
            data: newPemesanan,
        });
    } catch (error) {
        if (error.code === 'P2002' && error.meta?.target === 'Pemesanan_email_key') {
            res.status(400).json({
                message: "Email sudah digunakan untuk pemesanan lain",
            });
        } else {
            res.status(500).json({
                message: "Terjadi kesalahan saat membuat pemesanan",
            });
        }
    }
});

pemesananRoutes.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const updatedPemesanan = await prisma.pemesanan.update({
		where: { id: parseInt(id) },
		data: { name: name },
	});
	res.status(200).json({
		message: `pemesanan with id: ${id} is updated`,
		data: updatedPemesanan,
	});
});

pemesananRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	await prisma.pemesanan.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		message: `pemesanan with id: ${id} successfully deleted`,
	});
});

module.exports = { pemesananRoutes };