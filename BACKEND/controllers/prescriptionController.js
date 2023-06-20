const Prescription = require('../model/Prescription');



//Search for Prescriptions
const getAllPrescriptions = async(req,res,next)=>{

    
    let prescriptions;

    try{
        prescriptions = await Prescription.find();
    }catch(err){
        console.log(err);
    }

    if(!prescriptions){
        return res.status(404).json({message:"No Prescriptions Found"})
    }

    return res.status(200).json({prescriptions});
}


//Adds new prescription according to a patient
const addPrescriptions = async(req,res,next) =>{

    const{patientRegNo,aptDate,drg1Name,drg1Dosage,drg2Name,drg2Dosage,drg3Name,drg3Dosage,drg4Name,drg4Dosage,drg5Name,drg5Dosage,drg6Name,drg6Dosage,drg7Name,drg7Dosage,drg8Name,drg8Dosage,duration,lab1,lab2,lab3,lab4,lab5,remarks,nextApt} = req.body;

    let prescription;
    try{
        prescription = new Prescription({
            patientRegNo,
            aptDate,
            drg1Name,
            drg1Dosage,
            drg2Name,
            drg2Dosage,
            drg3Name,
            drg3Dosage,
            drg4Name,
            drg4Dosage,
            drg5Name,
            drg5Dosage,
            drg6Name,
            drg6Dosage,
            drg7Name,
            drg7Dosage,
            drg8Name,
            drg8Dosage,
            duration,
            lab1,
            lab2,
            lab3,
            lab4,
            lab5,
            remarks,
            nextApt
        });
        let data = JSON.stringify(prescription)
        await prescription.save();
    }catch(err){
        return res.status(500).json({message:'Unable to add'})
    }
    return res.status(201).json({prescription})
}


//fetches all prescriptions according to a patients ID
const getByPatientID = async(req,res,next)=>{

    const regNo = req.params.patientRegNo;
    let prescriptions;

    try{
        prescriptions = await Prescription.find({patientRegNo:`${regNo}`});
    }catch(err) {
        console.log(err);
    }

    if(!prescriptions){
        return res.status(404).json({message:"There are no prescriptions"});
    }
    return res.status(200).json({prescriptions});
}


//Deletes prescription if it is not necessary
const deletePrescription = async(req,res,next) =>{

    const id = req.params.id;
    const{patientRegNo,aptDate,drg1Name,drg1Dosage,drg2Name,drg2Dosage,drg3Name,drg3Dosage,drg4Name,drg4Dosage,drg5Name,drg5Dosage,drg6Name,drg6Dosage,drg7Name,drg7Dosage,drg8Name,drg8Dosage,duration,lab1,lab2,lab3,lab4,lab5,remarks,nextApt} = req.body;
    let prescription;

    try{
        prescription = await Prescription.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!prescription){
        return res.status(404).json({message:"Could not Delete"});
    }
    return res.status(201).json({message:"Prescription removed"});

}

exports.addPrescriptions = addPrescriptions;
exports.getAllPrescriptions = getAllPrescriptions;
exports.getByPatientID = getByPatientID;
exports.deletePrescription = deletePrescription;