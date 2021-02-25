const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.use(express.static('public'))

var mysql = require('mysql');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json())

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
    //trueLog(msg); //uncomment if you want logs
}
*/


//var access = fs.createWriteStream("/Users/knsta001/OneDrive - Oslo Kommune Utdanningsetaten/vgs/1/web/Butikk_fordypning" + '/node.access.txt', { fl ags: 'a' })
  //    , error = fs.createWriteStream("/Users/knsta001/OneDrive - Oslo Kommune Utdanningsetaten/vgs/1/web/Butikk_fordypning" + '/node.error.txt', { flags: 'a' });

// redirect stdout / stderr
//proc.stdout.pipe(access);
//proc.stderr.pipe(error);



var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pswd",
    database: "aestethic"
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('form.html');
});

app.post('/submit', urlencodedParser, function (req, res) {
    console.log("Db conf");
    console.log(req.body.name);
    console.log(req.body.message);
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected");
        var sql = "INSERT INTO `users` (`name`,`message`) VALUES ('" + req.body.name + "', '" + req.body.message + "')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("table created");
        });
    });
    res.sendFile('public/index.html', { root: __dirname });
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});