const Patient = require("../model/Patient");
const QRcode = require('qrcode');


//Generate list of patients
const getAllPatients = async(req,res,next) =>{

    let patients; 
    try{
        patients = await Patient.find();
    }catch(err){
        console.log(err);
    }

    if(!patients){
        return res.status(404).json({message: "No patients found"})
    }
    return res.status(200).json({patients});

}



//Add new patients
const addPatients = async(req,res,next)=>{

    const {patientName,patientdob,patientNIC,patientContact,patientAddress,clinic, gender,guardian,relationship,guardContact,division,registrationDate} = req.body;
    
    let patient;
    try{ 
        patient = new Patient({
            patientName,
            patientdob,
            patientNIC,
            patientContact,
            patientAddress,
            clinic,
            gender,
            guardian,
            relationship,
            guardContact,
            division,
            registrationDate
        });
        
        let data = JSON.stringify(patient)
        await patient.save();
    }catch(err){
        console.log(err);
    }

    if(!patient){
        return res.status(500).json({message:'Unable to add'})
    }
    return res.status(201).json({patient})

}


//Search for a certian patient according to ID
const getById = async(req,res,next)=>{

    const id = req.params.id;
    let patient;

    try{
        patient = await Patient.findById(id);
    }catch(err) {
        console.log(err);
    }

    if(!patient){
        return res.status(404).json({message:"There are no patients"});
    }
    return res.status(200).json({patient});
}


//Update Patient details
const updateDetails = async(req,res,next) =>{

    const id = req.params.id;
    const {patientContact,patientAddress,guardian,relationship,guardContact,division} = req.body;
    let patient;

    try{
        patient = await Patient.findByIdAndUpdate(id, {
            patientContact,
            patientAddress,
            guardian,
            relationship,
            guardContact,
            division
        });

        patient = patient.save()
    }catch(err){
        console.log(err);
    }

    if(!patient){
        return res.status(404).json({message:"Could not Update"});
    }
    return res.status(201).json({patient});
}


//delete patient from system
const deletePatient = async(req,res,next) =>{

    const id = req.params.id;
    const {registrationNumber,patientName,patientdob,patientNIC,patientContact,patientAddress,clinic,guardian,relationship,guardContact,division} = req.body;
    let patient;

    try{
        patient = await Patient.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!patient){
        return res.status(404).json({message:"Could not Delete"});
    }
    return res.status(201).json({message:"Patient removed"});

}


//Code used to fetch patients according to registration date
const getByRegDate = async(req,res,next)=>{

    const regDate = req.params.registrationDate;
    let patients;

    try{
        patients = await Patient.find({registrationDate:`${regDate}`});
    }catch(err) {
        console.log(err);
    }

    if(!patients){
        return res.status(404).json({message:"There are no patients"});
    }
    return res.status(200).json({patients});
}


//Used to fetch data according to patients name
const getByRegName = async(req,res,next)=>{

    const regName = req.params.registrationName;
    let patients;

    try{
        patients = await Patient.find({patientName:`${regName}`});
    }catch(err) {
        console.log(err);
    }

    if(!patients){
        return res.status(404).json({message:"There are no patients"});
    }
    return res.status(200).json({patients});
}

exports.getAllPatients = getAllPatients;
exports.addPatients = addPatients;
exports.getById = getById; 
exports.updateDetails = updateDetails;
exports.deletePatient = deletePatient;
exports.getByRegDate = getByRegDate;
exports.getByRegName = getByRegName;