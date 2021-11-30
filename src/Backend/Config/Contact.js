const express = require('express');
const router = express.Router();
const controller = require('../Middleware/ContactController');


router.post("/contact_us", controller.display);

module.exports = router;