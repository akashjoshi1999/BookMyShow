const db = require('../Config/Connection');
db;
module.exports = {
    insert: (req, res) => {
        const title = req.body.stitle;
        const about = req.body.sabout;
        const lang = req.body.slanguage;
        const rating = req.body.srating;
        const cat = req.body.scat;
        const date = req.body.sdate;
        const image = findImage(req.body.simage);
        const price = req.body.sprice;
        const posterimage = findImage(req.body.sposter);

        db.query("INSERT INTO Sports (sportTitle,about,language,rating,sportCategory,date,,image,sportImage,price) VALUES(?,?,?,?,?,?.?,?,?)",
            [title, about, lang, rating, cat, date, posterimage, image, price],
            (err, result) => {
                if (err) {
                    res.send({ err: err });
                    console.log(err);
                }
                else {
                    console.log("in insert");
                    res.send(result);
                }
            })
    },
    edit: (re, res) => {
        const title = req.body.stitle;
        const about = req.body.sabout;
        const lang = req.body.slanguage;
        const rating = req.body.srating;
        const cat = req.body.scat;
        const date = req.body.sdate;
        const image = findImage(req.body.simage);
        const price = req.body.sprice
        const id = req.body.id;
        const posterimage = findImage(req.body.sposter);

        db.query("UPDATE Sports SET sportTitle=?,about=?,language=?,rating=?,sportCategory=?,date=?,image=?,sportImage=?,price=? WHERE sportId=?",
            [title, about, lang, rating, cat, date, image, posterimage, price, id]
            , (err, result) => {
                if (err) {
                    res.send({ err: err });
                } else {
                    db.query("SELECT * FROM Sports", (err, result) => {
                        res.send(result);
                    })
                }
            })
    },
    display: (req, res) => {
        db.query("SELECT * FROM Sports", (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            else {
                res.send(result);
            }
        })
    },
    delete: (req, res) => {
        const sid = req.body.sportId;
        db.query("DELETE FROM Sports WHERE sportId= ?", [sid], (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            else {
                db.query("SELECT * FROM Sports", (err, result) => {
                    res.send(result);
                })
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