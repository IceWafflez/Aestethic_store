/*
const express = require('express')
const app = express()

var mysql = require('mysql');



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL database tilkoblet")
});

app.get("/createdb", (req,res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Database laget")
    });
});

app.listen(4000, () => {
    console.log("Server på 4000")
  })   

*/