const express = require('express');
const configDb = require('./Config/Connection');
const app = express();
const movieRoute = require('./Config/movies');
const playRoute = require('./Config/plays');
const eventRoute = require('./Config/Events');
const sportRoute = require('./Config/Sports');
const offerRoute = require('./Config/Offers');
const contactRoute =  require('./Config/Contact');


const cors = require('cors');
app.use(express.json());

app.use(cors());
configDb;
app.use("/movie", movieRoute);
app.use("/play",playRoute);
app.use("/event",eventRoute);
app.use("/sport",sportRoute);
app.use("/offer",offerRoute);

app.use("/contact",contactRoute);

app.listen(3004, () => { console.log("server running...") })


// app.post("/events", (req, res) => {
//   const title = req.body.etitle;
//   const about = req.body.eabout;
//   const lang = req.body.elanguage;
//   const rating = req.body.erating;
//   const cat = req.body.ecat;
//   const date = req.body.edate;
//   const image = findImage(req.body.eimage);
//   const artist = req.body.eartist;
//   const artistimage = findImage(req.body.eartistimg);
//   const price = req.body.eprice;
//   const posterimage = findImage(req.body.eposter);

//   db.query("INSERT INTO Events (eventTitle,about,language,rating,eventCategory,date,EventImage,image,Artist,ArtistImage,price) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
//     [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//         console.log(err);
//       }
//       else {
//         res.send(result);
//       }
//     })
// })
// //event edit
// app.post("/events_edit", (req, res) => {
//   const title = req.body.etitle;
//   const about = req.body.eabout;
//   const lang = req.body.elanguage;
//   const rating = req.body.erating;
//   const cat = req.body.ecat;
//   const date = req.body.edate;
//   const image = findImage(req.body.eimage);
//   const artist = req.body.eartist;
//   const artistimage = findImage(req.body.eartistimg);
//   const price = req.body.eprice;
//   const id = req.body.id;
//   const posterimage = findImage(req.body.eposter);

//   db.query("UPDATE Events SET eventTitle=?,about=?,language=?,rating=?,eventCategory=?,date=?,EventImage=?,image=?,Artist=?,ArtistImage=?,price=? WHERE eventId=?",
//     [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price, id]
//     , (err, res) => {
//       if (err) {
//         // res.send({err:err});
//       } else {
//         db.query("SELECT * FROM Events", (err, result) => {
//           res.send(result);
//           console.log(result);
//         })
//       }
//     })
// })

// app.post("/delete_events", (req, res) => {
//   const eid = req.body.eventId;
//   console.log("delete id:", eid);
//   db.query("DELETE FROM Events WHERE eventId= ?", [eid], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       db.query("SELECT * FROM Events", (err, result) => {
//         res.send(result);
//       })
//     }
//   })
// })

// app.post("/display_event", (req, res) => {
//   db.query("SELECT * FROM Events", (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })
// })

// app.post("/plays", (req, res) => {
//   const title = req.body.ptitle;
//   const about = req.body.pabout;
//   const lang = req.body.planguage;
//   const rating = req.body.prating;
//   const cat = req.body.pcat;
//   const date = req.body.pdate;
//   const image = findImage(req.body.pimage);
//   const posterimage = findImage(req.body.pposter);
//   const artist = req.body.partist;
//   const artistimage = findImage(req.body.partistimg);
//   const price = req.body.pprice

//   db.query("INSERT INTO Play (playTitle,about,language,rating,playCategory,date,image,playImage,Artist,ArtistImage,price) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
//     [title, about, lang, rating, cat, date, posterimage, image, artist, artistimage, price],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//         console.log(err);
//       }
//       else {
//         console.log("in insert");
//         res.send(result);
//       }
//     })
// })
// //edit plays
// app.post("/plays_edit", (req, res) => {

//   const id = req.body.id;
//   const title = req.body.ptitle;
//   const about = req.body.pabout;
//   const lang = req.body.planguage;
//   const rating = req.body.prating;
//   const cat = req.body.pcat;
//   const date = req.body.pdate;
//   const image = findImage(req.body.pimage);
//   const artist = req.body.partist;
//   const artistimage = findImage(req.body.partistimg);
//   const price = req.body.pprice;
//   const posterimage = findImage(req.body.pposter);


//   db.query("UPDATE Play SET playTitle=?,about=?,language=?,rating=?,playCategory=?,date=?,image=?,playImage=?,Artist=?,ArtistImage=?,price=? WHERE playId=?",
//     [title, about, lang, rating, cat, date, image, posterimage, artist, artistimage, price, id]
//     , (err, res) => {
//       if (err) {
//         // res.send({ err: err });
//       } else {
//         db.query("SELECT * FROM Play", (err, result) => {
//           console.log(result);
//         })
//       }
//     })
// })





// app.post("/delete_plays", (req, res) => {
//   const pid = req.body.playId;
//   db.query("DELETE FROM Play WHERE playId= ?", [pid], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       db.query("SELECT * FROM Play", (err, result) => {
//         res.send(result);
//       })
//     }
//   })
// })

// app.post("/display_play", (req, res) => {
//   db.query("SELECT * FROM Play", (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })
// })

// app.post("/sports", (req, res) => {
//   const title = req.body.stitle;
//   const about = req.body.sabout;
//   const lang = req.body.slanguage;
//   const rating = req.body.srating;
//   const cat = req.body.scat;
//   const date = req.body.sdate;
//   const image = findImage(req.body.simage);
//   const price = req.body.sprice;
//   const posterimage = findImage(req.body.sposter);

//   db.query("INSERT INTO Sports (sportTitle,about,language,rating,sportCategory,date,,image,sportImage,price) VALUES(?,?,?,?,?,?.?,?,?)",
//     [title, about, lang, rating, cat, date, posterimage, image, price],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//         console.log(err);
//       }
//       else {
//         console.log("in insert");
//         res.send(result);
//       }
//     })
// })

// //edit sports
// app.post("/sports_edit", (req, res) => {
//   const title = req.body.stitle;
//   const about = req.body.sabout;
//   const lang = req.body.slanguage;
//   const rating = req.body.srating;
//   const cat = req.body.scat;
//   const date = req.body.sdate;
//   const image = findImage(req.body.simage);
//   const price = req.body.sprice
//   const id = req.body.id;
//   const posterimage = findImage(req.body.sposter);

//   db.query("UPDATE Sports SET sportTitle=?,about=?,language=?,rating=?,sportCategory=?,date=?,image=?,sportImage=?,price=? WHERE sportId=?",
//     [title, about, lang, rating, cat, date, image, posterimage, price, id]
//     , (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       } else {
//         db.query("SELECT * FROM Sports", (err, result) => {
//           res.send(result);
//         })
//       }
//     })
// })


// app.post("/delete_sports", (req, res) => {
//   const sid = req.body.sportId;
//   db.query("DELETE FROM Sports WHERE sportId= ?", [sid], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       db.query("SELECT * FROM Sports", (err, result) => {
//         res.send(result);
//       })
//     }
//   })
// })

// app.post("/display_sport", (req, res) => {
//   db.query("SELECT * FROM Sports", (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })
// })
// //theater
// app.post('/theaters', (req, res) => {

//   const tname = req.body.tname;
//   const cname = req.body.cname;
//   const area = req.body.area;
//   const rating = req.body.rating;
//   const theatertype = req.body.theatertype;
//   const timage = findImage(req.body.image)

//   db.query("INSERT INTO theater (t_name,city_name,area,rating,t_type,image) VALUES(?,?,?,?,?,?)",
//     [tname, cname, area, rating, theatertype, timage],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//         console.log(err);
//       }
//       else {
//         console.log("in insert");
//         res.send(result);
//       }
//     })

// })
// app.post("/display_theater", (req, res) => {
//   db.query("SELECT * FROM theater", (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       res.send(result);
//     }
//   })
// })

// app.post("/delete_theaters", (req, res) => {
//   const tid = req.body.theaterId;
//   db.query("DELETE FROM theater WHERE t_id= ?", [tid], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//       console.log(err);
//     }
//     else {
//       db.query("SELECT * FROM theater", (err, result) => {
//         res.send(result);
//       })
//     }
//   })
// })
// app.post("/theaters_edit", (req, res) => {
//   const tname = req.body.tname;
//   const cname = req.body.cname;
//   const area = req.body.area;
//   const rating = req.body.rating;
//   const theatertype = req.body.theatertype;
//   const id = req.body.id;

//   db.query("UPDATE theater SET t_name=?,city_name=?,area=?,rating=?,t_type=? WHERE t_id=?",
//     [tname, cname, area, rating, theatertype, id]
//     , (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       } else {
//         db.query("SELECT * FROM theater", (err, result) => {
//           res.send(result);
//         })
//       }
//     })
// })

// app.post('/theatersearch', (req, res) => {
//   const tname = req.body.tname;
//   const theatername = `${tname}%`;
//   db.query("SELECT * FROM theater WHERE city_name LIKE ?", [theatername], (err, result) => {
//     if (err) {
//       res.send({ err: err });
//     } else {
//       res.send(result);
//     }
//   })
// })

// app.post('/offers', (req, res) => {
//   const sqlSelect = "SELECT * FROM offer_details ";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// })

// app.post("/contact_us", (req, res) => {
//   db.query("SELECT * FROM contact_us", (err, result) => {
//     res.send(result);
//   })
// })

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// function findImage(filename) {
//   var startIndex = (filename.indexOf('\\') >= 0 ? filename.lastIndexOf('\\') : filename.lastIndexOf('/'));
//   var image = filename.substring(startIndex);
//   if (image.indexOf('\\') === 0 || image.indexOf('/') === 0) {
//     image = image.substring(1);
//   }
//   return image;
// }