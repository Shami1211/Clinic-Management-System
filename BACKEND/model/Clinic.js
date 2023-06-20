const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clinicSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name value'],
    },

    day:{
        type: String,
        required: [true, 'Please add a day value'],
    },

    startTime: {
        type: String,
        required: [true, 'Please add a start time value'],
    },

    endTime: {
        type: String,
        required: [true, 'Please add an end time value'],
    },

    location: {
        type: String,
        required: [true, 'Please add a location value'],
    }

},{timestamps:true,});


    module.exports = mongoose.model('Clinic', clinicSchema)