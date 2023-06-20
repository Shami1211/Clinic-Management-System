const AppointmentAttendence = require("../model/AppointmentAttendence")

const addAppointmentAttendence = async (req, res, next) => {

    const id = req.params.id
    const {patient_id, patient_name, contact_number, slot_number, appoinment_date, appoinment_time} = req.body
    let appointmet;

    try{
        appointmet = new AppointmentAttendence({

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

const getAllAppointmentAttendence = async (req, res, next) => {

    let appointmentAttendence;

    try{
        appointmentAttendence = await AppointmentAttendence.find();

    } catch(err){
        console.log(err);
    }

    if(!appointmentAttendence){
        return res.status(404).json({ message: "No appointmets found" })
    }

    return res.status(200).json({ appointmentAttendence });
};

const deleteAllAttendence = async (req, res, next) => {

    const id = req.params.patient_id;

    let appointmentAttendence;

    try{

        appointmentAttendence = await AppointmentAttendence.deleteMany({})

    }catch(err){
        console.log(err);
    }

    if(!appointmentAttendence){
        return res.status(404).json({ message: "Unable to delete" })
    }

    return res.status(200).json({ appointmentAttendence })


}

exports.addAppointmentAttendence = addAppointmentAttendence
exports.getAllAppointmentAttendence = getAllAppointmentAttendence
exports.deleteAllAttendence = deleteAllAttendence