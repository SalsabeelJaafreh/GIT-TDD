const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
  // // TODO - your code here!
  // Cat.find({},function(error,cats){
  // 	if(error){
  // 		console.log("no users!")
  // 		res.send(500)
  // 	}
  // 	else{
  // 		res.send(cats)
  // 	}
  // })
  

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


