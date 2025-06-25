
const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController");

//router object
const router = express.Router();

// Define the route using the sendEmailController function
router.post("/sendEmail", sendEmailController);

//export
module.exports = router;
