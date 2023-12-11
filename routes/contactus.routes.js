const express = require("express");
const contactusRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all contactus
contactusRoutes.get("/", async (req, res) => {
	const contactus = await prisma.contactus.findMany();
	res.status(200).send(contactus);
});

// create new contactus
// contactusRoutes.post("/", async (req, res) => {
// 	const { name, email, contactus } = req.body;
// 	const newcontactus = await prisma.contactus.create({
// 		data: {
// 			name: name,
// 			email: email,
// 			contactus: contactus,
// 		},
// 	});
// 	res.status(201).json({
// 		contactus: "contactus created",
// 		data: newcontactus,
// 	});
// });
contactusRoutes.post("/", async (req, res) => {
    const { firstname, lastname, email, message } = req.body;
    const newcontactus = await prisma.contactus.create({
        data: {
            firstname: firstname,
            lastname: lastname,
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