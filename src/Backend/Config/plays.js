const express = require('express');
const router = express.Router();
const controller = require('../Middleware/PlayController');

router.post("/plays", controller.insert);
router.post("/delete_plays", controller.delete);
router.post("/display_plays", controller.display);
router.post("/edit_plays", controller.edit);

module.exports = router;