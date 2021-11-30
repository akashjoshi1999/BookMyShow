const express = require('express');
const router = express.Router();
const controller = require('../Middleware/EventController');

router.post("/event", controller.insert);
router.post("/delete_events", controller.delete);
router.post("/display_event", controller.display);
router.post("/event_edit", controller.edit);
// router.post("/event_details", controller.show);

module.exports = router;