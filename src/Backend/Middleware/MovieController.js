const db = require('../Config/Connection');
db;
module.exports = {
    insert: (req, res) => {
        console.log("file", req.file);
        const title = req.body.title;
        const about = req.body.about;
        const lang = req.body.lang;
        const rating = req.body.rating;
        const movietype = req.body.movietype;
        const category = req.body.category;
        const releasedate = req.body.releasedate;
        const price = req.body.price;
        const image = findImage(req.body.image);
        const bimage = findImage(req.body.bimage);


        console.log("path:", image);
        console.log("path:", bimage);


        db.query(
            "INSERT INTO movies (title,about,lang,rating,movie_type,category,release_date,price,image,backimage) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [title, about, lang, rating, movietype, category, releasedate, price, image, bimage],
            (err, result) => {
                console.log("inserr", err);
                db.query("SELECT * FROM movies", (err, result) => {
                    res.send(result);
                })
            }
        );
    },
    delete: (req, res) => {
        const mid = req.body.movieId;
        db.query("DELETE FROM movies WHERE movie_id= ?", [mid], (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            else {
                db.query("SELECT * FROM movies", (err, result) => {
                    res.send(result);
                })
            }
        })
    },
    display: (req, res) => {
        db.query("SELECT * FROM movies", (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            else {
                res.send(result);
            }
        })
    },
    edit: (req, res) => {
        const mid = req.body.id;
        const title = req.body.title;
        const about = req.body.about;
        const lang = req.body.lang;
        const rating = req.body.rating;
        const movietype = req.body.movietype;
        const category = req.body.category;
        const releasedate = req.body.releasedate;
        const price = req.body.price;
        const image = findImage(req.body.image);
        const bimage = findImage(req.body.bimage);

        db.query("UPDATE movies SET title=?,about=?,lang=?,rating=?,movie_type=?,category=?,release_date=?,price=?,image=?,backimage=? WHERE movie_id=?",
            [title, about, lang, rating, movietype, category, releasedate, price, image, bimage, mid], (err, result) => {
                if (err) {
                    res.send({ err: err })
                }
                else {
                    db.query("SELECT * FROM movies", (err, result) => {
                        res.send(result);
                    });
                }
            }
        );
    },
    show: (req, res) => {
        const mtitle = req.body.movietitle;
        db.query("SELECT * FROM movies WHERE title=?", [mtitle], (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            else {
                res.send(result);
            }
        })
    }
}
function findImage(filename) {
    var startIndex = (filename.indexOf('\\') >= 0 ? filename.lastIndexOf('\\') : filename.lastIndexOf('/'));
    var image = filename.substring(startIndex);
    if (image.indexOf('\\') === 0 || image.indexOf('/') === 0) {
        image = image.substring(1);
    }
    return image;

}

