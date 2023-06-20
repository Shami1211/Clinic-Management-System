const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    mobileNo:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    clinic:{ 
        type:String,
        required:true,
    },
    unit:{
        type:String,
        required:true,
    },
    specialization:{
        type:String,
        required:true,
    },
    
    

});

module.exports = mongoose.model("Doctor",doctorSchema);

// doctors


