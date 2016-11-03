var mongoose1 = require("mongoose");

var candidateList1 = mongoose1.Schema({

    Cand_name : {
    	type : String,
    	required : true
    },
    Cand_id: {
    	type : String,
    	required : true
    },
    Cand_Qua : {
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


var Contact= module.exports = mongoose1.model("selection", candidateList1);
module.exports.add=function(body,callback){    
    Contact.create(body,callback)
}