const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//used to collect data from the drugs
const drugSchema = new Schema({

    drugsName:{
        type: String,
        required : true
    },

    drugsExpiredDate:{
        type: String,
        required : true
    },

    drugsCetagory:{
        type: String,
        required : true
    },

    drugsMadeDate:{
        type: String,
        required : true
    },

    drugsQuantity:{
        type: String,
        required : true
    },

    drugsDescription:{
        type: String,
        required : true
    },

    drugsAvailable:{
        type: Boolean,
    }



});

module.exports = mongoose.model("Drugs",drugSchema);
//drugs will be stored as drugss