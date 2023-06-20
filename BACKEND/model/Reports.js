const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//used to collect data from the Reoprt
const reportSchema = new Schema({
    patientID: {
        type : String,
        required: true
    },
    patientName: {
        type : String,
        required: true
    },
    testName: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    result: {
        type : String,
        required: true
    },
    other: {
        type : String,
        required: true
    }

})

module.exports = mongoose.model("Report",reportSchema);

//reports