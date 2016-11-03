var mongoose = require("mongoose");
'use strict';
var candidateList = mongoose.Schema({

    Cand_name : {
    	type : String,
    	required : true
    },
    Cand_id : {
    	type : String,
    	required : true
    },
    Cand_Qual : {
    	type : String,
    	required : true
    },
    Vender_Name : {
    	type : String,
    	required : true
    },
    Client_id : {
    	type : String,
    required : true
   },
    M_O_E : {
    	type : String,
    	required : true
    }

});

var Candidate = module.exports = mongoose.model("employee", candidateList);
module.exports.getCandidates = function(callback){
   Candidate.find(callback)
}

