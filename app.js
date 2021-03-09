const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const { Http2ServerRequest } = require('http2')
app.use(express.static('public'))
app.use(express.json())
var mysql = require('mysql');
const { basename } = require('path')

app.listen(port, () => {
  console.log(`Gratulerer,du klarte å kjøre et dokument uten en bug. Port:http://localhost:${port}`)
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
/*
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }
  stmt.finalize()
  db.run('CREATE TABLE bruker (info TEXT)')
  var a = db.prepare('INSERT INTO bruker VALUES (?)')
  a.run("bruker")

  a.finalize()

  
  db.each('SELECT rowid AS id, info FROM bruker', function (err, row) {
    console.log(row.id + ': ' + row.info)
  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
})
})
})
db.close();
*/

const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(':memory:');

db.run('CREATE TABLE kunder(name text)');

db.run(`INSERT INTO kunder(name) VALUES(?)`, ['C'], function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

db.close();