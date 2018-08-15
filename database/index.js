const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;
db.on('error' , function(){
	console.log('mongoose not Connected !')
})
db.once('open' , function () {
	console.log("mongoose Connected !")
})


let catSchema = mongoose.Schema({
  
  catName:String,
  ownerEmail:String,
  imageUrl:String,
  adoptionMessage:String
});

let Cat = mongoose.model('Cat', catSchema);



let save = (data,callback) => {
  // TODO: Your code here
  var cat1=new Cat({})
cat1.save(function(error,cat){
 	if(error){
 		console.log("error")
 	}
 		else {
 			console.log(cat) }
 })
  
  
}

module.exports.save = save;
module.exports.Cat = Cat;
