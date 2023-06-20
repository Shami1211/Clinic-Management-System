const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appointmentRequestsSchema = new Schema({

    patient_id:{
        type: String,
        required: true
    },

    patient_name:{
        type: String,
        required: true
    },

    contact_number:{
        type: String,
        required: true
    },

    reoson:{
        type: String,
        required: true
    },
    
}, {timestamps: true})

module.exports = mongoose.model('AppointmentRequests', appointmentRequestsSchema)
