const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appointmentAttendenceSchema = new Schema({
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

    slot_number:{
        type: Number,
        required: true
    },

    appoinment_date:{
        type: String,
        required: true
    },

    appoinment_time:{
        type: String,
        required: true
    },
    
}, {timestamps: true})

module.exports = mongoose.model('AppointmentAttendence', appointmentAttendenceSchema)
