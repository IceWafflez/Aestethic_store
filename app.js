const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.use(express.static('public'))
app.use(express.json())
var mysql = require('mysql');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("*",(req,res) => {
    res.sendFile(__dirname + "/public/404.html")
})

app.post('/', (req, res) => {
  console.log('break');
  console.log(req.body) // <-- this will access the body of the post
  fs.appendFile('data.txt', JSON.stringify(req.body,null,2), (err) => {
    if (err) throw err;
    console.log("lagret til data.txt");
  })
  res.sendStatus(200)
})
/*
var trueLog = console.log;
console.log = function(msg) {
    fs.appendFile("/Users/knsta001/OneDrive - Oslo Kommune Utdanningsetaten/vgs/1/web/Butikk_fordypning/log.log", msg, function(err) {
        if(err) {
            return trueLog(err);
        }
    });
    //trueLog(msg); 
}
*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
/*
var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./Aestethic.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });


db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});



  db.close();*/