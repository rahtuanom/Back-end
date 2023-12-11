const express = require("express");
const reserveRoutes = express.Router();
const { prisma } = require("../config/prisma");



pemesananRoutes.post("/", async (req, res) => {

  try {
    const checkInDate = new Date(Date.parse(req.body.check_in));
    const checkOutDate = new Date(Date.parse(req.body.check_out));

    const newReserve = await prisma.reserve.create({
      data: {
        name: req.body.full_name,
        email: req.body.email_address,
        check_in: checkInDate.toISOString(),
        check_out: checkOutDate.toISOString(),
        adults: req.body.adults,
        childs: req.body.childs,
        rooms: req.body.rooms,
        type_room: req.body.type_room,
      },
    });

    res.status(200).json(newReserve);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

pemesananRoutes.get("/", async (req, res) => {
  try {
    const reservation = await prisma.reserve.findMany();
    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: "Reservation not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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

module.exports = { pemesananRoutes };