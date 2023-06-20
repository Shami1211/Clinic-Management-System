const AppointmentRequests = require("../model/AppointmentRequests")

const getAllAppointmentRequests = async (req, res, next) => {

    let appointmentsRequests;

    try{
        appointmentsRequests = await AppointmentRequests.find();
    } catch(err){
        console.log(err);
    }

    if(!appointmentsRequests){
        return res.status(404).json({ message: "No appointmets found" })
    }

    return res.status(200).json({ appointmentsRequests });
};

const addAppointmentRequest = async (req, res, next) => {

    const id = req.params.id
    const {patient_id, patient_name, contact_number, reoson} = req.body
    let appointmetRequest;

    try{
        appointmetRequest = new AppointmentRequests({

            patient_id,
            patient_name,
            contact_number,
            reoson

        });

        await appointmetRequest.save();

    }catch(err){
        console.log(err)
    }

    if(!appointmetRequest){
        return res.status(500).json({message:'Unable to add'});
    }
    return res.status(201).json({ appointmetRequest });
};

const deleteAppointmentRequest = async (req, res, next) => {

    const id = req.params.id;

    let appointmentRequest;

    try{

        appointmentRequest = await AppointmentRequests.findByIdAndDelete(id)

    }catch(err){
        console.log(err);
    }

    if(!appointmentRequest){
        return res.status(404).json({ message: "Unable to delete" })
    }

    return res.status(200).json({ appointmentRequest })


}

exports.getAllAppointmentRequests = getAllAppointmentRequests
exports.addAppointmentRequest = addAppointmentRequest
exports.deleteAppointmentRequest = deleteAppointmentRequest