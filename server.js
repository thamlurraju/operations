var express = require("express");

var app = express();

var mongoose = require("mongoose");

var bodyparser=require("body-parser");
 
var candidate_info = require("./models/candidate");

var candidate_info1 = require("./models/contact");

mongoose.connect("mongodb://localhost/companydoc", function(){

   console.log("Database successfully Connected...");

})

var port = process.env.PORT || 7000;

app.use(express.static(__dirname + "/public"));

app.get("/candidateInfo", function(req, res){

	candidate_info.getCandidates(function(err, data){

         if(err){
           throw err;
         }
        res.json(data);
	})
});


app.post("/selectCandidates/:values",function(req,res){

 var body=req.params.values;

 console.log(body);


candidate_info1.add(body,function(err,data){

 	if(err){
 		throw err;
 	}

 	res.json(data);

 })
})

app.listen(port, function(){
 
   console.log("Server is connected with " + port + " port number");

})
