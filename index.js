const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();  

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get("/", (req, res) => {
    
     res.sendFile(__dirname+"/index.html");
})

app.post("/", (req, res) => {
    const _id = crypto.randomBytes(16).toString('hex');
    const myName = req.body.name;
    const myObj = {
        id : _id,
        name : myName
    }
       res.send(`
       <center>
       <div id="main"> 
       <h1>User Details</h1>
        <p>Name:     ${myObj.name}</p>
        <p>ID:       ${myObj.id}</p>
       </div>
       </center>`
       );
})

app.listen(3000, () => {
    console.log('Running server over loalhost:3000');
})