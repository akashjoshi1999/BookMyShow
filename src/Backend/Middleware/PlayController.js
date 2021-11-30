const db = require('../Config/Connection');
db;
module.exports = {
    insert: (req, res) => {
        const title = req.body.ptitle;
        const about = req.body.pabout;
        const lang = req.body.planguage;
        const rating = req.body.prating;
        const cat = req.body.pcat;
        const date = req.body.pdate;
        const image = findImage(req.body.pimage);
        const posterimage = findImage(req.body.pposter);
        const artist = req.body.partist;
        const artistimage = findImage(req.body.partistimg);
        const price = req.body.pprice

        db.query("INSERT INTO Play (playTitle,about,language,rating,playCategory,date,image,playImage,Artist,ArtistImage,price) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
            [title, about, lang, rating, cat, date, posterimage, image, artist, artistimage, price],
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
    display:(req,res)=>{
        db.query("SELECT * FROM Play", (err, result) => {
                if (err) {
                  res.send({ err: err });
                  console.log(err);
                }
                else {
                  console.log(result);
                  res.send(result);
                }
              })
    },
    delete:(req,res)=>{
        const pid = req.body.playId;
          db.query("DELETE FROM Play WHERE playId= ?", [pid], (err, result) => {
            if (err) {
              res.send({ err: err });
              console.log(err);
            }
            else {
              db.query("SELECT * FROM Play", (err, result) => {
                res.send(result);
              })
            }
          })
    },
    edit:(req,res)=>{
        const id = req.body.id;
        const title = req.body.ptitle;
        const about = req.body.pabout;
        const lang = req.body.planguage;
        const rating = req.body.prating;
        const cat = req.body.pcat;
        const date = req.body.pdate;
        const image = findImage(req.body.pimage);
        const artist = req.body.partist;
        const artistimage = findImage(req.body.partistimg);
        const price = req.body.pprice;
        const posterimage = findImage(req.body.pposter);


        db.query("UPDATE Play SET playTitle=?,about=?,language=?,rating=?,playCategory=?,date=?,image=?,playImage=?,Artist=?,ArtistImage=?,price=? WHERE playId=?",
            [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price, id]
            , (err, res) => {
            if (err) {
                // res.send({ err: err });
            } else {
                db.query("SELECT * FROM Play", (err, result) => {
                console.log(result);
                })
            }
            })
    }
}