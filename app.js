const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json())

app.post('/', (req, res) => {
  console.log('break');
  console.log(req.body) // <-- this will access the body of the post
  res.sendStatus(200)
})


var trueLog = console.log;
console.log = function(msg) {
    fs.appendFile("/tmp/log.log", msg, function(err) {
        if(err) {
            return trueLog(err);
        }
    });
    //trueLog(msg); //uncomment if you want logs
}


//var access = fs.createWriteStream("/Users/knsta001/OneDrive - Oslo Kommune Utdanningsetaten/vgs/1/web/Butikk_fordypning" + '/node.access.txt', { fl ags: 'a' })
  //    , error = fs.createWriteStream("/Users/knsta001/OneDrive - Oslo Kommune Utdanningsetaten/vgs/1/web/Butikk_fordypning" + '/node.error.txt', { flags: 'a' });

// redirect stdout / stderr
//proc.stdout.pipe(access);
//proc.stderr.pipe(error);


