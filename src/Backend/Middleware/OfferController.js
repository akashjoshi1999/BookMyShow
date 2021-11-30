const db = require('../Config/Connection');
db;
module.exports = {
  display: (req, res) => {
    db.query("SELECT * FROM offer_details ", (err, result) => {
      res.send(result);
    });
  }
}
