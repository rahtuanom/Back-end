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
    const { name } = req.body;
    const newPemesanan = await prisma.pemesanan.create({
        data: {
            name: name,
        },
    });
    res.status(201).json({
        message: "Pemesanan Dibuat",
        data: newPemesanan,
    });
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
	await prisma.pemesananRoutes.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.status(200).json({
		message: `pemesanan with id: ${id} successfully deleted`,
	});
});

module.exports = { pemesananRoutes };