const express = require("express");
const contactusRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all contactus
contactusRoutes.get("/", async (req, res) => {
	const contactus = await prisma.contactus.findMany();
	res.status(200).send(contactus);
});


contactusRoutes.post("/", async (req, res) => {
    const { firstname, lastname, email, message } = req.body;
    const newcontactus = await prisma.contactus.create({
        data: {
            firstName: firstname, // Use firstName instead of firstname
            lastName: lastname, // Use lastName instead of lastname
            email: email,
            message: message,
        },
    });
    res.status(201).json({
        contactus: "contactus created",
        data: newcontactus,
    });
});

module.exports = { contactusRoutes };