const db = require('../Config/Connection');
db;
module.exports = {
   display:(req,res)=>{ db.query("SELECT * FROM contact_us", (err, result) => {
            res.send(result);
          })
        }
}