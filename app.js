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
  console.log(req.body)
  fs.appendFile('data.txt', JSON.stringify(req.body,null,2), (err) => {
    if (err) throw err;
    console.log("lagret til data.txt");
  })
  res.sendStatus(200)
})

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');
var check;
db.serialize(function() {
  
  db.run("CREATE TABLE if not exists user_info (info TEXT)");
  var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

});

db.close();
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/