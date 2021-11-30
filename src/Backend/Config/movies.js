const express = require('express');
const router = express.Router();
const controller = require('../Middleware/MovieController');
const multer = require('multer');
var upload = multer({dest:'/var/www/html/BookMyShow/bookmyshow/public/images/'});

router.post("/movies",upload.any("image"), controller.insert);
router.post("/delete_movies", controller.delete);
router.post("/display_movie", controller.display);
router.post("/movies_edit", controller.edit);
router.post("/movie_details", controller.show);

module.exports = router;