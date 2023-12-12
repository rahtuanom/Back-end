// const express = require("express");
// const contactusRoutes = express.Router();
// const { prisma } = require("../config/prisma");

// // get all contactus
// contactusRoutes.get("/", async (req, res) => {
// 	const contactus = await prisma.contactus.findMany();
// 	res.status(200).send(contactus);
// });


// contactusRoutes.post("/", async (req, res) => {
//     const { firstName, lastName, email, mobileNumber, message, cratedAt } = req.body;
//     const newContactus = await prisma.contactus.create({
//         data: {
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             mobileNumber: mobileNumber,
//             message: message,
//             cratedAt: cratedAt
//         },
//     });
//     res.status(201).json({
//         contactus: "contactus created",
//         data: newContactus,
//     });
// });

// module.exports = { contactusRoutes };

const express = require("express");
const contactusRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all contactus
contactusRoutes.get("/", async (req, res) => {
    const contactus = await prisma.contactus.findMany();
    res.status(200).send(contactus);
});

contactusRoutes.post("/", async (req, res) => {
    const { firstName, lastName, email, mobile, message } = req.body;
    const newContactus = await prisma.contactus.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobile,
            message: message,
        },
    });
    res.status(201).json({
        contactus: "contactus created",
        data: newContactus,
    });
});
module.exports = { contactusRoutes };