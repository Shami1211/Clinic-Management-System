//Works as a class

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//used to collect data from prescription form
const prescriptionSchema = new Schema({
    patientRegNo:{
        type:String,
        required: true
    },
    aptDate:{
        type:String,
        required:true
    },
    drg1Name:{
        type:String,
        required: false
    },
    drg1Dosage:{
        type:String,
        required: false
    },
    drg2Name:{
        type:String,
        required: false
    },
    drg2Dosage:{
        type:String,
        required: false
    },
    drg3Name:{
        type:String,
        required: false
    },
    drg3Dosage:{
        type:String,
        required: false
    },
    drg4Name:{
        type:String,
        required: false
    },
    drg4Dosage:{
        type:String,
        required: false
    },
    drg5Name:{
        type:String,
        required: false
    },
    drg5Dosage:{
        type:String,
        required: false

    },
    drg6Name:{
        type:String,
        required: false

    },
    drg6Dosage:{
        type:String,
        required: false

    },
    drg7Name:{
        type:String,
        required: false
    },
    drg7Dosage:{
        type:String,
        required: false

    },
    drg8Name:{
        type:String,
        required: false

    },
    drg8Dosage:{
        type:String,
        required: false
    },
    duration:{
        type:Number,
        required:true
    },
    lab1:{
        type:String,
        required: false
    },
    lab2:{
        type:String,
        required: false
    },
    lab3:{
        type:String,
        required: false
    },
    lab4:{
        type:String,
        required: false
    },
    lab5:{
        type:String,
        required: false
    },
    remarks:{
        type: String,
        required:false
    },
    nextApt:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model("Prescription", prescriptionSchema);
