const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();
var routerExpress = require('router-express')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
  // TODO - your code here!
  db.find({},function(err,data){

        if(err){
            res.status(500).send(err)
        }

        else{
            res.status(201).send(data)
        }
    })
});

app.post('/cats', function (req, res) {
  // TODO - your code here!
//   var catName=req.body.catName;
//   var ownerEmail=req.body.ownerEmail;
//   var imageUrl=req.body.imageUrl;
//   var adoptionMessage=req.body.adoptionMessage;
// Cat.save(function(error,done){
// 	if(error){
// 		res.send(500)
// 	}
// 	else{
// 		console.log("New cat saved!")
// 	}

// })
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


