const express = require('express');
const router = express.Router();
const controller = require('../Middleware/SportController');

router.post("/sport", controller.insert);
router.post("/delete_sport", controller.delete);
router.post("/display_sport", controller.display);
router.post("/sport_edit", controller.edit);
// router.post("/event_details", controller.show);

module.exports = router;