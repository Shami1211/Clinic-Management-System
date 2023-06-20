const Appointment = require("../model/Appointments")

const getAllAppointments = async (req, res, next) => {

    let appointments;

    try{
        appointments = await Appointment.find();
    } catch(err){
        console.log(err);
    }

    if(!appointments){
        return res.status(404).json({ message: "No appointmets found" })
    }

    return res.status(200).json({ appointments })
};

//get by ID
const getById = async(req, res, next) => {

    const patient_id = req.params.patient_id;
    let appointment;

    try{
        appointment = await Appointment.findOne({ patient_id: patient_id});

    }catch(err){
        console.log(err);
    }

    if(!appointment){
        return res.status(404).json({ message: "No appointmets found" })
    }

    return res.status(200).json({ appointment })
}

//get by patient ID
const getBySystemId = async(req, res, next) => {

    const patient_id = req.params.patient_id;
    let appointment;

    try{
        appointment = await Appointment.findOne({ patient_id: patient_id});

    }catch(err){
        console.log(err);
    }

    if(!appointment){
        return console.log('No appointmets found');
        //res.status(404).json({ message: "No appointmets found" })
        
    }

    return res.status(200).json({ appointment })
}

//get Date
const getDateToReport = async(req, res, next) => {

    const appointment_date = req.params.appointment_date;
    let appointment;

    try{
        appointment = await Appointment.findOne({ appointment_date: appointment_date });

    }catch(err){
        console.log(err);
    }

    if(!appointment){
        return res.status(404).json({ message: "No appointments found" });
    }

    return res.status(200).json({ appointment });
}



const addAppointment = async (req, res, next) => {

    const id = req.params.id
    const {patient_id, patient_name, contact_number, slot_number, appoinment_date, appoinment_time} = req.body
    let appointmet;

    try{
        appointmet = new Appointment({

            patient_id,
            patient_name,
            contact_number,
            slot_number,
            appoinment_date,
            appoinment_time

        });

        await appointmet.save();

    }catch(err){
        console.log(err)
    }

    if(!appointmet){
        return res.status(500).json({message:'Unable to add'});
    }
    return res.status(201).json({ appointmet });
};

const updateAppointment = async (req, res, next) => {

    const id = req.params.patient_id;
    const { patient_name, contact_number, slot_number, appoinment_date, appoinment_time} = req.body

    let appointment;

    try{

        appointment = await Appointment.findOneAndUpdate( {patient_id: id}, {

            patient_name,
            contact_number,
            slot_number,
            appoinment_date,
            appoinment_time

        });

        appointment = await appointment.save()

    }catch(err){
        console.log(err);
    }

    if(!appointment){
        return res.status(404).json({ message: "No appointmets found" })
    }

    return res.status(200).json({ appointment })
}

const deleteAppointment = async (req, res, next) => {

    const id = req.params.patient_id;

    let appointment;

    try{

        appointment = await Appointment.findOneAndDelete({patient_id: id})

    }catch(err){
        console.log(err);
    }

    if(!appointment){
        return res.status(404).json({ message: "Unable to delete" })
    }

    return res.status(200).json({ appointment })


}
  



exports.getAllAppointments = getAllAppointments;
exports.addAppointment = addAppointment;
exports.getById = getById;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;
exports.getBySystemId = getBySystemId;
exports.getDateToReport = getDateToReport;