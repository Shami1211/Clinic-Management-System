//Works as a class


const mongoose = require('mongoose');


const Schema = mongoose.Schema;


//used to collect data from the patients
const patientSchema = new Schema({
    
    patientName:{
        type: String,
        required: true
    },
    patientdob:{
        type: String,
        required: true
    },
    patientNIC:{
        type: Number,
        required: true
    },
    patientContact:{
        type: Number,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    clinic:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    guardian:{
        type: String,
        required: true
    },
    relationship:{
        type: String,
        required: true
    },
    guardContact:{
        type: Number,
        required: true
    },
    division:{
        type: String,
        required: true
    },
    registrationDate:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("Patient", patientSchema);

//patient will be stored as patients