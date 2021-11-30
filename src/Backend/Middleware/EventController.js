const db = require('../Config/Connection');
db;
module.exports = {
    insert: (req, res) => {
        const title = req.body.etitle;
        const about = req.body.eabout;
        const lang = req.body.elanguage;
        const rating = req.body.erating;
        const cat = req.body.ecat;
        const date = req.body.edate;
        const image = findImage(req.body.eimage);
        const artist = req.body.eartist;
        const artistimage = findImage(req.body.eartistimg);
        const price = req.body.eprice;
        const posterimage = findImage(req.body.eposter);

        db.query("INSERT INTO Events (eventTitle,about,language,rating,eventCategory,date,EventImage,image,Artist,ArtistImage,price) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
            [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price],
            (err, result) => {
                if (err) {
                    res.send({ err: err });
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            });
    },
    edit: (req, res) => {
        const title = req.body.etitle;
        const about = req.body.eabout;
        const lang = req.body.elanguage;
        const rating = req.body.erating;
        const cat = req.body.ecat;
        const date = req.body.edate;
        const image = findImage(req.body.eimage);
        const artist = req.body.eartist;
        const artistimage = findImage(req.body.eartistimg);
        const price = req.body.eprice;
        const id = req.body.id;
        const posterimage = findImage(req.body.eposter);

        db.query("UPDATE Events SET eventTitle=?,about=?,language=?,rating=?,eventCategory=?,date=?,EventImage=?,image=?,Artist=?,ArtistImage=?,price=? WHERE eventId=?",
            [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price, id]
            , (err, result) => {
                if (err) {
                    // res.send({err:err});
                } else {
                    db.query("SELECT * FROM Events", (err, result) => {
                        res.send(result);
                        console.log(result);
                    })
                }
            })
    },
    delete: (req, res) => {
        const eid = req.body.eventId;
        db.query("DELETE FROM Events WHERE eventId= ?", [eid], (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            else {
                db.query("SELECT * FROM Events", (err, result) => {
                    res.send(result);
                })
            }
        })
    },
    display: (req, res) => {
        db.query("SELECT * FROM Events", (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
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