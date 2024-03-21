const mongoose =require('mongoose');
const Schema = mongoose.Schema;

// schema 

const packageSchema = new Schema({
    pid  : {
        type : Number,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    unitprice : {
        type : Number, 
        required : true
    },
    catagory : {
        type : String, 
        required : true
    },
   
})


const package = mongoose.model("Packages",packageSchema);

module.exports = package;
 
