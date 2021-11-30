const express = require('express');
const router = express.Router();
const controller = require('../Middleware/OfferController');


router.post("/offers", controller.display);

module.exports = router;